class YuGiOhGame {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.currentRound = 1;
        this.gameActive = true;
        this.playerChoice = null;
        this.computerChoice = null;
        this.roundResults = [];
        this.gameMode = 'normal';
        this.powerLevel = 0;
        this.maxPowerLevel = 100;
        this.maxRounds = 10;
        
        this.cardImages = {
            pedra: 'src/assets/icons/dragon.png',
            papel: 'src/assets/icons/magician.png',
            tesoura: 'src/assets/icons/exodia.png',
            back: 'src/assets/icons/card-back.png',
            front: 'src/assets/icons/card-front.png',
            millenium: 'src/assets/icons/millenium.png',
            millenium2: 'src/assets/icons/millenium2.png',
            eye: 'src/assets/icons/eye.jpg'
        };
        
        this.cardNames = {
            pedra: 'Dragão Azul',
            papel: 'Mago Negro',
            tesoura: 'Exodia'
        };
        
        this.rpgAssets = {
            backgrounds: {
                normal: 'src/assets/rpg/background-image.png',
                golden: 'src/assets/rpg/background-image-golden.png',
                golden2: 'src/assets/rpg/background-image-golden2.png',
                grey: 'src/assets/rpg/background-image-grey.png'
            },
            borders: {
                normal: 'src/assets/rpg/border-image.png',
                golden: 'src/assets/rpg/border-image-golden.png',
                golden2: 'src/assets/rpg/border-image-golden2.png',
                grey: 'src/assets/rpg/border-image-grey.png'
            },
            buttons: {
                normal: 'src/assets/rpg/button.png',
                hover: 'src/assets/rpg/button-hover.png',
                down: 'src/assets/rpg/button-down.png',
                golden: 'src/assets/rpg/button-golden.png',
                goldenHover: 'src/assets/rpg/button-golden-hover.png',
                goldenDown: 'src/assets/rpg/button-golden-down.png',
                background: 'src/assets/rpg/button-background.png'
            },
            checkboxes: {
                off: 'src/assets/rpg/checkbox-off.png',
                on: 'src/assets/rpg/checkbox-on.png',
                goldenOff: 'src/assets/rpg/checkbox-golden-off.png',
                goldenOn: 'src/assets/rpg/checkbox-golden-on.png'
            },
            radios: {
                off: 'src/assets/rpg/radio-off.png',
                on: 'src/assets/rpg/radio-on.png',
                goldenOff: 'src/assets/rpg/radio-golden-off.png',
                goldenOn: 'src/assets/rpg/radio-golden-on.png'
            },
            progress: {
                normal: 'src/assets/rpg/progress.png',
                blue: 'src/assets/rpg/progress-blue.png',
                green: 'src/assets/rpg/progress-green.png',
                red: 'src/assets/rpg/progress-red.png',
                barLeft: 'src/assets/rpg/progress-bar-left.png',
                barRight: 'src/assets/rpg/progress-bar-right.png',
                barTrack: 'src/assets/rpg/progress-bar-track.png'
            },
            sliders: {
                left: 'src/assets/rpg/slider-left.png',
                right: 'src/assets/rpg/slider-right.png',
                thumb: 'src/assets/rpg/slider-thumb.png',
                track: 'src/assets/rpg/slider-track.png',
                leftGolden: 'src/assets/rpg/slider-left-golden.png',
                rightGolden: 'src/assets/rpg/slider-right-golden.png',
                thumbGolden: 'src/assets/rpg/slider-thumb-golden.png',
                trackGolden: 'src/assets/rpg/slider-track-golden.png'
            },
            scrollbars: {
                button: 'src/assets/rpg/scrollbar-button.png',
                thumb: 'src/assets/rpg/scrollbar-thumb.png',
                track: 'src/assets/rpg/scrollbar-track.png'
            },
            selects: {
                background: 'src/assets/rpg/select-background-image.png',
                border: 'src/assets/rpg/select-border-image.png'
            },
            dividers: {
                normal: 'src/assets/rpg/hr.png',
                golden: 'src/assets/rpg/hr-golden.png'
            },
            icons: {
                millenium2: 'src/assets/icons/millenium2.png'
            }
        };
        
        this.cursors = {
            normal: 'src/assets/cursor/cursor.cur',
            yugi: 'src/assets/cursor/yugicursor.png',
            yami: 'src/assets/cursor/yamiyugicursorGLOW.png'
        };
        
        this.videoAssets = {
            yugi: 'src/assets/video/yugi.mp4'
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateDisplay();
        this.playBackgroundMusic();
        this.setupCursors();
        this.setupRPGTheme();
        this.addPowerLevelSystem();
        this.addSpecialEffects();
        this.addVideoBackground();
        this.addAllRPGElements();
        this.addScrollbarStyling();
        this.addSliderControls();
        this.addCheckboxElements();
        this.addRadioElements();
        this.addSelectStyling();
        this.addDividerElements();
    }
    
    setupCursors() {
        document.body.style.cursor = `url('${this.cursors.yugi}'), auto`;
        
        const cardOptions = document.querySelectorAll('.card-option');
        cardOptions.forEach(option => {
            option.style.cursor = `url('${this.cursors.yami}'), pointer`;
        });
        
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.style.cursor = `url('${this.cursors.yami}'), pointer`;
        });
    }
    
    setupRPGTheme() {
        const container = document.querySelector('.game-container');
        container.style.backgroundImage = `url('${this.rpgAssets.backgrounds.normal}')`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.backgroundRepeat = 'no-repeat';
        
        this.addBorderEffects();
    }
    
    addBorderEffects() {
        const battleField = document.querySelector('.battle-field');
        const scoreBoard = document.querySelector('.score-board');
        const cardSelection = document.querySelector('.card-selection');
        
        [battleField, scoreBoard, cardSelection].forEach(element => {
            if (element) {
                element.style.borderImage = `url('${this.rpgAssets.borders.golden}') 30 stretch`;
                element.style.borderImageSlice = '30';
            }
        });
    }
    
    addVideoBackground() {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-background';
        videoContainer.innerHTML = `
            <video autoplay muted loop>
                <source src="${this.videoAssets.yugi}" type="video/mp4">
            </video>
            <div class="video-overlay"></div>
        `;
        
        const gameContainer = document.querySelector('.game-container');
        gameContainer.insertBefore(videoContainer, gameContainer.firstChild);
    }
    
    addAllRPGElements() {
        this.addProgressBars();
        this.addCustomButtons();
        this.addRPGDecorations();
    }
    
    addProgressBars() {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'rpg-progress-container';
        progressContainer.innerHTML = `
            <h3>Barras de Progresso RPG</h3>
            <div class="progress-item">
                <label>Vida do Jogador</label>
                <div class="progress-bar-rpg" style="background-image: url('${this.rpgAssets.progress.barTrack}')">
                    <div class="progress-fill-rpg" style="background-image: url('${this.rpgAssets.progress.green}')" data-width="75"></div>
                </div>
            </div>
            <div class="progress-item">
                <label>Energia</label>
                <div class="progress-bar-rpg" style="background-image: url('${this.rpgAssets.progress.barTrack}')">
                    <div class="progress-fill-rpg" style="background-image: url('${this.rpgAssets.progress.blue}')" data-width="60"></div>
                </div>
            </div>
            <div class="progress-item">
                <label>Mana</label>
                <div class="progress-bar-rpg" style="background-image: url('${this.rpgAssets.progress.barTrack}')">
                    <div class="progress-fill-rpg" style="background-image: url('${this.rpgAssets.progress.red}')" data-width="90"></div>
                </div>
            </div>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.appendChild(progressContainer);
        
        this.animateProgressBars();
    }
    
    animateProgressBars() {
        const progressFills = document.querySelectorAll('.progress-fill-rpg');
        progressFills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            fill.style.width = width + '%';
        });
    }
    
    addCustomButtons() {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'rpg-buttons-container';
        buttonContainer.innerHTML = `
            <h3>Botões RPG</h3>
            <div class="rpg-button-group">
                <button class="rpg-btn" style="background-image: url('${this.rpgAssets.buttons.normal}')">Normal</button>
                <button class="rpg-btn" style="background-image: url('${this.rpgAssets.buttons.hover}')">Hover</button>
                <button class="rpg-btn" style="background-image: url('${this.rpgAssets.buttons.down}')">Down</button>
                <button class="rpg-btn" style="background-image: url('${this.rpgAssets.buttons.golden}')">Dourado</button>
            </div>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.appendChild(buttonContainer);
    }
    
    addRPGDecorations() {
        const decorationContainer = document.createElement('div');
        decorationContainer.className = 'rpg-decorations';
        decorationContainer.innerHTML = `
            <div class="decoration-item">
                <img src="${this.rpgAssets.dividers.golden}" alt="Divisor" class="rpg-divider">
            </div>
            <div class="decoration-item">
                <img src="${this.rpgAssets.icons.millenium2}" alt="Millennium" class="millennium-item">
            </div>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.appendChild(decorationContainer);
    }
    
    addScrollbarStyling() {
        const style = document.createElement('style');
        style.textContent = `
            ::-webkit-scrollbar {
                width: 20px;
                background-image: url('${this.rpgAssets.scrollbars.track}');
            }
            ::-webkit-scrollbar-thumb {
                background-image: url('${this.rpgAssets.scrollbars.thumb}');
                border-radius: 10px;
            }
            ::-webkit-scrollbar-button {
                background-image: url('${this.rpgAssets.scrollbars.button}');
                height: 20px;
            }
        `;
        document.head.appendChild(style);
    }
    
    addSliderControls() {
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'rpg-sliders-container';
        sliderContainer.innerHTML = `
            <h3>Controles de Slider</h3>
            <div class="slider-group">
                <div class="slider-item">
                    <label>Volume</label>
                    <div class="slider-track" style="background-image: url('${this.rpgAssets.sliders.track}')">
                        <div class="slider-thumb" style="background-image: url('${this.rpgAssets.sliders.thumb}')" data-value="70"></div>
                    </div>
                </div>
                <div class="slider-item">
                    <label>Velocidade</label>
                    <div class="slider-track" style="background-image: url('${this.rpgAssets.sliders.trackGolden}')">
                        <div class="slider-thumb" style="background-image: url('${this.rpgAssets.sliders.thumbGolden}')" data-value="50"></div>
                    </div>
                </div>
            </div>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.appendChild(sliderContainer);
    }
    
    addCheckboxElements() {
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'rpg-checkboxes-container';
        checkboxContainer.innerHTML = `
            <h3>Checkboxes RPG</h3>
            <div class="checkbox-group">
                <label class="checkbox-item">
                    <input type="checkbox" class="rpg-checkbox">
                    <span class="checkbox-custom" data-off="${this.rpgAssets.checkboxes.off}" data-on="${this.rpgAssets.checkboxes.on}"></span>
                    Opção 1
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" class="rpg-checkbox" checked>
                    <span class="checkbox-custom" data-off="${this.rpgAssets.checkboxes.goldenOff}" data-on="${this.rpgAssets.checkboxes.goldenOn}"></span>
                    Opção 2 (Dourada)
                </label>
            </div>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.appendChild(checkboxContainer);
        
        this.setupCheckboxes();
    }
    
    setupCheckboxes() {
        const checkboxes = document.querySelectorAll('.rpg-checkbox');
        checkboxes.forEach(checkbox => {
            const customSpan = checkbox.nextElementSibling;
            const offImage = customSpan.getAttribute('data-off');
            const onImage = customSpan.getAttribute('data-on');
            
            customSpan.style.backgroundImage = `url('${offImage}')`;
            
            checkbox.addEventListener('change', () => {
                customSpan.style.backgroundImage = `url('${checkbox.checked ? onImage : offImage}')`;
            });
        });
    }
    
    addRadioElements() {
        const radioContainer = document.createElement('div');
        radioContainer.className = 'rpg-radios-container';
        radioContainer.innerHTML = `
            <h3>Radios RPG</h3>
            <div class="radio-group">
                <label class="radio-item">
                    <input type="radio" name="rpg-radio" class="rpg-radio" value="1">
                    <span class="radio-custom" data-off="${this.rpgAssets.radios.off}" data-on="${this.rpgAssets.radios.on}"></span>
                    Modo Normal
                </label>
                <label class="radio-item">
                    <input type="radio" name="rpg-radio" class="rpg-radio" value="2" checked>
                    <span class="radio-custom" data-off="${this.rpgAssets.radios.goldenOff}" data-on="${this.rpgAssets.radios.goldenOn}"></span>
                    Modo Dourado
                </label>
            </div>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.appendChild(radioContainer);
        
        this.setupRadios();
    }
    
    setupRadios() {
        const radios = document.querySelectorAll('.rpg-radio');
        radios.forEach(radio => {
            const customSpan = radio.nextElementSibling;
            const offImage = customSpan.getAttribute('data-off');
            const onImage = customSpan.getAttribute('data-on');
            
            customSpan.style.backgroundImage = `url('${offImage}')`;
            
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    customSpan.style.backgroundImage = `url('${onImage}')`;
                }
            });
        });
    }
    
    addSelectStyling() {
        const selectContainer = document.createElement('div');
        selectContainer.className = 'rpg-select-container';
        selectContainer.innerHTML = `
            <h3>Select RPG</h3>
            <select class="rpg-select">
                <option>Escolha uma opção</option>
                <option>Opção 1</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
            </select>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.appendChild(selectContainer);
        
        this.styleSelect();
    }
    
    styleSelect() {
        const select = document.querySelector('.rpg-select');
        select.style.backgroundImage = `url('${this.rpgAssets.selects.background}')`;
        select.style.borderImage = `url('${this.rpgAssets.selects.border}') 10 stretch`;
    }
    
    addDividerElements() {
        const dividerContainer = document.createElement('div');
        dividerContainer.className = 'rpg-dividers-container';
        dividerContainer.innerHTML = `
            <div class="divider-item">
                <img src="${this.rpgAssets.dividers.normal}" alt="Divisor Normal" class="rpg-divider-normal">
            </div>
            <div class="divider-item">
                <img src="${this.rpgAssets.dividers.golden}" alt="Divisor Dourado" class="rpg-divider-golden">
            </div>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.appendChild(dividerContainer);
    }
    
    addPowerLevelSystem() {
        const powerBar = document.createElement('div');
        powerBar.className = 'power-level-container';
        powerBar.innerHTML = `
            <div class="power-level-header">
                <img src="${this.rpgAssets.buttons.golden}" alt="Power" class="power-icon">
                <span>Nível de Poder</span>
            </div>
            <div class="power-level-bar">
                <div class="power-level-fill" style="width: ${this.powerLevel}%"></div>
            </div>
            <span class="power-level-text">${this.powerLevel}/${this.maxPowerLevel}</span>
        `;
        
        const gameMain = document.querySelector('.game-main');
        gameMain.insertBefore(powerBar, gameMain.firstChild);
        
        this.updatePowerLevel();
    }
    
    updatePowerLevel() {
        const powerFill = document.querySelector('.power-level-fill');
        const powerText = document.querySelector('.power-level-text');
        
        if (powerFill && powerText) {
            powerFill.style.width = `${this.powerLevel}%`;
            powerText.textContent = `${this.powerLevel}/${this.maxPowerLevel}`;
            
            if (this.powerLevel >= this.maxPowerLevel) {
                this.activateGoldenMode();
            }
        }
    }
    
    activateGoldenMode() {
        this.gameMode = 'golden';
        this.powerLevel = 0;
        
        const container = document.querySelector('.game-container');
        container.style.backgroundImage = `url('${this.rpgAssets.backgrounds.golden}')`;
        
        this.addGoldenEffects();
        this.showSpecialMessage('Modo Dourado Ativado! Poder máximo!');
    }
    
    addGoldenEffects() {
        const elements = document.querySelectorAll('.card-slot, .card-option, .btn');
        elements.forEach(element => {
            element.style.borderImage = `url('${this.rpgAssets.borders.golden2}') 30 stretch`;
            element.style.borderImageSlice = '30';
            element.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
        });
    }
    
    showSpecialMessage(message) {
        const specialMsg = document.createElement('div');
        specialMsg.className = 'special-message';
        specialMsg.textContent = message;
        specialMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ffd700, #ffed4e);
            color: #1a1a2e;
            padding: 20px 40px;
            border-radius: 15px;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 2000;
            animation: specialMessage 2s ease-in-out;
        `;
        
        document.body.appendChild(specialMsg);
        
        setTimeout(() => {
            specialMsg.remove();
        }, 2000);
    }
    
    bindEvents() {
        const cardOptions = document.querySelectorAll('.card-option');
        const newGameBtn = document.getElementById('new-game-btn');
        const rulesBtn = document.getElementById('rules-btn');
        const continueBtn = document.getElementById('continue-btn');
        const closeRulesBtn = document.getElementById('close-rules-btn');
        
        cardOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                if (!this.gameActive) return;
                
                const cardType = e.currentTarget.dataset.card;
                this.selectCard(cardType);
            });
        });
        
        if (newGameBtn) newGameBtn.addEventListener('click', () => this.newGame());
        if (rulesBtn) rulesBtn.addEventListener('click', () => this.showRules());
        if (continueBtn) continueBtn.addEventListener('click', () => this.hideResultModal());
        if (closeRulesBtn) closeRulesBtn.addEventListener('click', () => this.hideRulesModal());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideResultModal();
                this.hideRulesModal();
            }
        });
        
        this.addKeyboardControls();
    }
    
    addKeyboardControls() {
        document.addEventListener('keydown', (e) => {
            if (!this.gameActive) return;
            
            switch(e.key) {
                case '1':
                case 'Digit1':
                    this.selectCard('pedra');
                    break;
                case '2':
                case 'Digit2':
                    this.selectCard('papel');
                    break;
                case '3':
                case 'Digit3':
                    this.selectCard('tesoura');
                    break;
                case 'r':
                case 'R':
                    this.newGame();
                    break;
                case 'h':
                case 'H':
                    this.showRules();
                    break;
            }
        });
    }
    
    selectCard(cardType) {
        if (!this.gameActive) return;
        
        this.playerChoice = cardType;
        this.computerChoice = this.getRandomChoice();
        
        this.updateCardDisplay();
        const result = this.determineWinner();
        this.updateScore();
        this.updatePowerLevel();
        this.nextRound();
        
        setTimeout(() => {
            this.showResultModal();
        }, 1000);
        
        this.addParticleEffect();
    }
    
    getRandomChoice() {
        const choices = ['pedra', 'papel', 'tesoura'];
        return choices[Math.floor(Math.random() * choices.length)];
    }
    
    determineWinner() {
        const player = this.playerChoice;
        const computer = this.computerChoice;
        
        if (player === computer) {
            this.roundResults.push({ result: 'empate', winner: null });
            this.powerLevel += 5;
            return 'empate';
        }
        
        const winningCombos = {
            'pedra': 'tesoura',
            'papel': 'pedra',
            'tesoura': 'papel'
        };
        
        if (winningCombos[player] === computer) {
            this.playerScore++;
            this.powerLevel += 15;
            this.roundResults.push({ result: 'vitoria', winner: 'player' });
            return 'vitoria';
        } else {
            this.computerScore++;
            this.powerLevel += 10;
            this.roundResults.push({ result: 'derrota', winner: 'computer' });
            return 'derrota';
        }
    }
    
    updateCardDisplay() {
        const playerCard = document.getElementById('player-card');
        const computerCard = document.getElementById('computer-card');
        
        if (playerCard && computerCard) {
            playerCard.querySelector('.card-image').src = this.cardImages[this.playerChoice];
            computerCard.querySelector('.card-image').src = this.cardImages[this.computerChoice];
            
            playerCard.classList.remove('winner', 'loser');
            computerCard.classList.remove('winner', 'loser');
            
            const result = this.roundResults[this.roundResults.length - 1];
            if (result.result === 'vitoria') {
                playerCard.classList.add('winner');
                computerCard.classList.add('loser');
            } else if (result.result === 'derrota') {
                playerCard.classList.add('loser');
                computerCard.classList.add('winner');
            }
        }
    }
    
    updateScore() {
        const playerScoreElement = document.getElementById('player-score');
        const computerScoreElement = document.getElementById('computer-score');
        
        if (playerScoreElement) {
            playerScoreElement.textContent = this.playerScore;
        }
        if (computerScoreElement) {
            computerScoreElement.textContent = this.computerScore;
        }
        
        this.updatePowerLevel();
    }
    
    nextRound() {
        this.currentRound++;
        const roundElement = document.getElementById('round-number');
        if (roundElement) {
            roundElement.textContent = `Rodada ${this.currentRound}`;
        }
        
        if (this.currentRound > this.maxRounds) {
            this.endGame();
        }
    }
    
    endGame() {
        this.gameActive = false;
        const winner = this.playerScore > this.computerScore ? 'Jogador' : 
                     this.computerScore > this.playerScore ? 'Computador' : 'Empate';
        
        setTimeout(() => {
            this.showGameEndModal(winner);
        }, 2000);
    }
    
    showResultModal() {
        const modal = document.getElementById('result-modal');
        const title = document.getElementById('result-title');
        const message = document.getElementById('result-message');
        
        if (!modal || !title || !message) return;
        
        const lastResult = this.roundResults[this.roundResults.length - 1];
        
        if (lastResult.result === 'vitoria') {
            title.textContent = 'Vitória!';
            title.style.color = 'var(--success-color)';
            message.textContent = `Parabéns! Seu ${this.cardNames[this.playerChoice]} venceu o ${this.cardNames[this.computerChoice]} do computador!`;
            this.playSound('win');
        } else if (lastResult.result === 'derrota') {
            title.textContent = 'Derrota!';
            title.style.color = 'var(--error-color)';
            message.textContent = `O ${this.cardNames[this.computerChoice]} do computador venceu seu ${this.cardNames[this.playerChoice]}!`;
            this.playSound('lose');
        } else {
            title.textContent = 'Empate!';
            title.style.color = 'var(--warning-color)';
            message.textContent = `Ambos escolheram ${this.cardNames[this.playerChoice]}! É um empate!`;
        }
        
        modal.classList.remove('hidden');
    }
    
    showGameEndModal(winner) {
        const modal = document.getElementById('result-modal');
        const title = document.getElementById('result-title');
        const message = document.getElementById('result-message');
        const continueBtn = document.getElementById('continue-btn');
        
        if (!modal || !title || !message || !continueBtn) return;
        
        title.textContent = 'Fim de Jogo!';
        title.style.color = 'var(--gold-color)';
        
        if (winner === 'Empate') {
            message.textContent = `Jogo terminou em empate! Placar final: ${this.playerScore} x ${this.computerScore}`;
        } else {
            message.textContent = `${winner} venceu! Placar final: ${this.playerScore} x ${this.computerScore}`;
        }
        
        continueBtn.textContent = 'Nova Partida';
        continueBtn.onclick = () => {
            this.newGame();
            this.hideResultModal();
        };
        
        modal.classList.remove('hidden');
    }
    
    hideResultModal() {
        const modal = document.getElementById('result-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this.resetCardDisplay();
    }
    
    showRules() {
        const modal = document.getElementById('rules-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }
    
    hideRulesModal() {
        const modal = document.getElementById('rules-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }
    
    resetCardDisplay() {
        const playerCard = document.getElementById('player-card');
        const computerCard = document.getElementById('computer-card');
        
        if (playerCard && computerCard) {
            playerCard.querySelector('.card-image').src = this.cardImages.back;
            computerCard.querySelector('.card-image').src = this.cardImages.back;
            
            playerCard.classList.remove('winner', 'loser');
            computerCard.classList.remove('winner', 'loser');
        }
    }
    
    newGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.currentRound = 1;
        this.gameActive = true;
        this.playerChoice = null;
        this.computerChoice = null;
        this.roundResults = [];
        this.gameMode = 'normal';
        this.powerLevel = 0;
        
        this.updateDisplay();
        this.resetCardDisplay();
        this.setupRPGTheme();
        
        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.textContent = 'Continuar';
            continueBtn.onclick = () => this.hideResultModal();
        }
    }
    
    updateDisplay() {
        this.updateScore();
        const roundElement = document.getElementById('round-number');
        if (roundElement) {
            roundElement.textContent = `Rodada ${this.currentRound}`;
        }
    }
    
    playSound(soundType) {
        try {
            const audio = new Audio(`src/assets/audios/${soundType}.wav`);
            audio.volume = 0.3;
            audio.play().catch(e => console.log('Audio não pôde ser reproduzido:', e));
        } catch (e) {
            console.log('Erro ao reproduzir áudio:', e);
        }
    }
    
    playBackgroundMusic() {
        try {
            const bgMusic = new Audio('src/assets/audios/egyptian_duel.mp3');
            bgMusic.loop = true;
            bgMusic.volume = 0.1;
            
            document.addEventListener('click', () => {
                bgMusic.play().catch(e => console.log('Música de fundo não pôde ser reproduzida:', e));
            }, { once: true });
        } catch (e) {
            console.log('Erro ao carregar música de fundo:', e);
        }
    }
    
    addSpecialEffects() {
        this.addCardHoverEffects();
        this.addCardSelectionEffects();
        this.addMillenniumEyeEffect();
        this.addCardFlipAnimation();
    }
    
    addMillenniumEyeEffect() {
        const header = document.querySelector('.game-header');
        if (header) {
            const eye = document.createElement('img');
            eye.src = this.cardImages.eye;
            eye.className = 'millennium-eye';
            eye.style.cssText = `
                position: absolute;
                top: 10px;
                right: 20px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                opacity: 0.8;
                animation: eyeGlow 3s ease-in-out infinite;
            `;
            header.appendChild(eye);
        }
    }
    
    addCardFlipAnimation() {
        const cardSlots = document.querySelectorAll('.card-slot');
        cardSlots.forEach(slot => {
            slot.addEventListener('click', () => {
                slot.style.transform = 'rotateY(180deg)';
                setTimeout(() => {
                    slot.style.transform = 'rotateY(0deg)';
                }, 500);
            });
        });
    }
    
    addCardHoverEffects() {
        const cardOptions = document.querySelectorAll('.card-option');
        
        cardOptions.forEach(option => {
            option.addEventListener('mouseenter', () => {
                option.style.transform = 'translateY(-10px) scale(1.05)';
                option.style.boxShadow = '0 15px 35px rgba(255, 215, 0, 0.4)';
            });
            
            option.addEventListener('mouseleave', () => {
                option.style.transform = 'translateY(0) scale(1)';
                option.style.boxShadow = '0 10px 25px rgba(255, 215, 0, 0.3)';
            });
        });
    }
    
    addCardSelectionEffects() {
        const cardOptions = document.querySelectorAll('.card-option');
        
        cardOptions.forEach(option => {
            option.addEventListener('click', () => {
                cardOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                setTimeout(() => {
                    option.classList.remove('selected');
                }, 1000);
            });
        });
    }
    
    addParticleEffect() {
        const battleField = document.querySelector('.battle-field');
        
        if (battleField && this.roundResults.length > 0) {
            const lastResult = this.roundResults[this.roundResults.length - 1];
            
            if (lastResult.result !== 'empate') {
                this.createParticles(battleField, lastResult.winner === 'player' ? 'var(--success-color)' : 'var(--error-color)');
            }
        }
    }
    
    createParticles(container, color) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = color;
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            
            const startX = Math.random() * container.offsetWidth;
            const startY = Math.random() * container.offsetHeight;
            
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            
            container.appendChild(particle);
            
            const animation = particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                { 
                    transform: `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => {
                particle.remove();
            };
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new YuGiOhGame();
    window.game = game;
});

window.addEventListener('load', () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loadingScreen.innerHTML = `
        <div style="text-align: center; color: #ffd700;">
            <img src="src/assets/icons/millenium2.png" alt="Millennium" style="width: 80px; height: 80px; margin-bottom: 20px;">
            <h1 style="font-size: 2rem; margin-bottom: 20px;">Yu-Gi-Oh!</h1>
            <p>Carregando...</p>
        </div>
    `;
    
    document.body.appendChild(loadingScreen);
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
});
