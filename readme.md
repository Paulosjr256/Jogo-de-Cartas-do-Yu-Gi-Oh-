# Yu-Gi-Oh! - Jo-ken-po Edition

Um jogo completo de Jo-ken-po (Pedra, Papel, Tesoura) com tema Yu-Gi-Oh! desenvolvido em JavaScript puro com HTML5 e CSS3, agora com sistema de poder, modo dourado e TODOS os assets RPG disponíveis!

## 🎮 Sobre o Jogo

Este é um jogo de Jo-ken-po que utiliza cartas do universo Yu-Gi-Oh! para representar as três opções clássicas:
- **Pedra** → Dragão Azul (Blue-Eyes White Dragon)
- **Papel** → Mago Negro (Dark Magician)  
- **Tesoura** → Exodia

## ✨ Características

- **Interface Moderna**: Design responsivo com tema Yu-Gi-Oh!
- **Sistema de Poder**: Acumule pontos para ativar o Modo Dourado
- **Modo Dourado**: Desbloqueie quando atingir 100 pontos de poder
- **Animações**: Efeitos visuais e transições suaves
- **Sistema de Pontuação**: Controle de vitórias, derrotas e empates
- **Música de Fundo**: Trilha sonora temática
- **Efeitos Sonoros**: Sons para vitória e derrota
- **Modais Informativos**: Regras do jogo e resultados das rodadas
- **Controles por Teclado**: Jogue usando teclas numéricas
- **Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **TODOS os Assets RPG**: Utilização completa de todos os elementos visuais disponíveis
- **Cursores Personalizados**: Cursores temáticos Yu-Gi-Oh!
- **Video Background**: Vídeo de fundo temático
- **Elementos RPG Interativos**: Checkboxes, radios, sliders e progress bars estilizados

## 🚀 Como Jogar

1. **Escolha sua carta**: Clique ou use as teclas 1, 2, 3
2. **Aguarde o resultado**: O computador escolherá aleatoriamente
3. **Acumule poder**: Cada rodada aumenta seu nível de poder
4. **Ative o Modo Dourado**: Chegue a 100 pontos de poder
5. **Continue jogando**: O jogo continua até completar 10 rodadas
6. **Veja o resultado final**: Ao final, será mostrado o vencedor da partida

## 🎯 Regras do Jogo

- **Pedra vence Tesoura**: O Dragão Azul vence o Exodia
- **Papel vence Pedra**: O Mago Negro vence o Dragão Azul  
- **Tesoura vence Papel**: O Exodia vence o Mago Negro
- **Empate**: Se ambos escolherem a mesma carta

## ⚡ Sistema de Poder

- **Vitória**: +15 pontos de poder
- **Derrota**: +10 pontos de poder  
- **Empate**: +5 pontos de poder
- **Modo Dourado**: Ativado ao atingir 100 pontos
  - Background dourado especial
  - Bordas e efeitos dourados
  - Reset do contador de poder

## 🎮 Controles

- **1, 2, 3**: Escolher carta (Pedra, Papel, Tesoura)
- **R**: Nova partida
- **H**: Ver regras
- **ESC**: Fechar modais
- **Mouse**: Clique nas cartas e botões

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Estilos avançados com variáveis CSS, gradientes e animações
- **JavaScript ES6+**: Programação orientada a objetos e funcionalidades modernas
- **Fontes**: Google Fonts (Orbitron) para o tema futurista
- **Assets**: TODOS os ícones, imagens, elementos RPG e vídeos do universo Yu-Gi-Oh!

## 📁 Estrutura do Projeto

```
js-yugioh-game/
├── index.html              # Arquivo principal HTML
├── readme.md               # Documentação do projeto
└── src/
    ├── assets/             # Recursos do jogo
    │   ├── audios/         # Arquivos de áudio
    │   ├── cursor/         # Cursores personalizados
    │   ├── favicon/        # Ícone do site
    │   ├── icons/          # Ícones das cartas
    │   ├── rpg/            # TODOS os elementos visuais RPG
    │   └── video/          # Vídeo de fundo temático
    ├── scripts/
    │   └── engine.js       # Lógica principal do jogo
    └── styles/
        ├── main.css        # Estilos principais
        ├── buttons.css     # Estilos dos botões
        ├── containers_and_frames.css # Componentes de interface
        └── reset.css       # Reset de estilos
```

## 🎨 Características Visuais

- **Paleta de Cores**: Tons escuros com destaque dourado
- **Gradientes**: Efeitos visuais modernos e atrativos
- **Animações CSS**: Transições suaves e efeitos hover
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela
- **Tema Yu-Gi-Oh!**: Cores e estilos inspirados no anime/mangá
- **TODOS os Assets RPG**: Utilização completa de todos os elementos visuais disponíveis
- **Cursores Temáticos**: Cursores personalizados do universo Yu-Gi-Oh!
- **Video Background**: Vídeo de fundo com overlay temático
- **Elementos RPG Interativos**: Checkboxes, radios, sliders e progress bars estilizados

## 🔊 Recursos de Áudio

- **Música de Fundo**: "Egyptian Duel" (loop automático)
- **Efeitos Sonoros**: 
  - `win.wav` - Som de vitória
  - `lose.wav` - Som de derrota

## 🎮 Funcionalidades do Jogo

- Sistema de pontuação automático
- Sistema de poder com barra visual
- Modo Dourado especial
- Controle de rodadas (máximo 10)
- Modais informativos para resultados
- Botão de nova partida
- Modal de regras do jogo
- Efeitos visuais para vitória/derrota
- Animações de partículas
- Tela de carregamento estilizada
- Controles por teclado
- Cursores personalizados
- Efeitos de carta (flip, hover)
- Olho do Milênio animado
- Backgrounds RPG dinâmicos
- Bordas temáticas
- Video background temático
- Elementos RPG interativos completos

## 🌐 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, tablet e mobile
- **Resoluções**: Responsivo para todas as resoluções comuns

## 🚀 Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Clique em qualquer lugar da tela para iniciar a música de fundo
4. Comece a jogar usando mouse ou teclado!

## 📱 Responsividade

O jogo foi desenvolvido com design responsivo, adaptando-se automaticamente a:
- **Desktop**: Layout horizontal otimizado
- **Tablet**: Layout intermediário
- **Mobile**: Layout vertical com botões maiores

## 🎯 Conceitos de Programação Demonstrados

- **Programação Orientada a Objetos**: Classe `YuGiOhGame`
- **Gerenciamento de Estado**: Controle de pontuação, rodadas e poder
- **Event Listeners**: Interação com elementos da interface
- **Manipulação do DOM**: Atualização dinâmica de conteúdo
- **Sistema de Modais**: Gerenciamento de janelas popup
- **Animações CSS**: Efeitos visuais e transições
- **Sistema de Áudio**: Reprodução de música e efeitos sonoros
- **Sistema de Poder**: Lógica de progressão e recompensas
- **Controles por Teclado**: Eventos de teclado e mapeamento
- **Assets Dinâmicos**: Carregamento e aplicação de recursos visuais
- **Elementos RPG Interativos**: Implementação de controles customizados

## 🔧 Personalização

O jogo pode ser facilmente personalizado através de:
- Variáveis CSS para cores e estilos
- Configuração de sons e músicas
- Modificação de textos e regras
- Adição de novas cartas ou mecânicas
- Ajuste do sistema de poder
- Personalização de assets RPG
- Modificação de elementos interativos

## 🆕 Novidades da Versão 3.0

- ✅ **Sistema de Poder Funcional**: Agora funciona perfeitamente!
- ✅ **Rodadas Funcionais**: Sistema de 10 rodadas implementado corretamente
- ✅ **TODOS os Assets RPG**: Utilização completa de todos os elementos visuais
- ✅ **Video Background**: Vídeo de fundo temático com overlay
- ✅ **Elementos RPG Interativos**: Checkboxes, radios, sliders e progress bars
- ✅ **Scrollbars Personalizados**: Estilização completa das barras de rolagem
- ✅ **Barras de Progresso RPG**: Múltiplas barras com assets temáticos
- ✅ **Botões RPG**: Todos os tipos de botões com assets correspondentes
- ✅ **Controles de Slider**: Sliders funcionais com thumbs personalizados
- ✅ **Checkboxes e Radios**: Elementos interativos com estados visuais
- ✅ **Selects Estilizados**: Dropdowns com tema RPG
- ✅ **Dividers Decorativos**: Elementos visuais de separação
- ✅ **Animações Avançadas**: Rotação, shimmer e efeitos especiais
- ✅ **Interface Completa**: Todos os elementos visuais implementados

## 🎨 Assets RPG Implementados

### **Backgrounds**
- Background normal, dourado, dourado2 e cinza

### **Bordas**
- Bordas normal, dourada, dourada2 e cinza

### **Botões**
- Botões normal, hover, down, dourado, dourado-hover, dourado-down e background

### **Checkboxes**
- Checkboxes off/on normais e dourados

### **Radios**
- Radios off/on normais e dourados

### **Progress Bars**
- Progress normal, azul, verde, vermelho
- Barras de progresso com track, left e right

### **Sliders**
- Sliders normais e dourados com thumbs e tracks

### **Scrollbars**
- Scrollbar button, thumb e track

### **Selects**
- Select background e border

### **Dividers**
- Dividers normal e dourado

### **Vídeos**
- Vídeo de fundo temático Yu-Gi-Oh!

### **Cursores**
- Cursores normal, Yu-Gi e Yami

## 📄 Licença

Este projeto é de código aberto e pode ser usado para fins educacionais e de entretenimento.

---

**Divirta-se duelando no mundo de Yu-Gi-Oh!** 🐉⚡

**Agora com Sistema de Poder, Modo Dourado e TODOS os Assets RPG!** ✨🌟🎮
