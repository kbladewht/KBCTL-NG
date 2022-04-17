// 'label' : [code, keyCode, qmkCode]
var keyStr2code = {
  'backspace' : [8, 'Backspce', 'KC_BSPC'],
  'tab' : [9, 'Tab', 'KC_TAB'],
  'clear' : [12, 'NumLock', 'KC_NLCK'],
  'enter' : [13, 'Enter', 'KC_ENT'],
  'shift' : [16, 'Shift', 'KC_SHIFT'],
  'rightshift' : [16, 'ShiftRight', 'KC_RSFT'],
  'leftshift' : [16, 'ShiftLeft', 'KC_LSFT'],
  'ctrl' : [17, 'Ctrl', 'KC_CTRL'],
  'rightctrl' : [17, 'ControlRight', 'KC_RCTL'],
  'leftctrl' : [17, 'ControlLeft', 'KC_LCTL'],
  'alt' : [18, 'ALT', 'KC_ALT'],
  'rightalt' : [18, 'AltRight', 'KC_RALT'],
  'leftalt' : [18, 'AltLeft', 'KC_LALT'],
  'pausebreak' : [19, 'Pause', 'KC_PAUS'],
  'capslock' : [20, 'CapsLock', 'KC_CAPS'],
  'esc' : [27, 'Escape', 'KC_ESC'],
  'space' : [32, 'Space', 'KC_SPC'],
  'pgup' : [33, 'PageUp', 'KC_PGUP'],
  'pgdn' : [34, 'PageDown', 'KC_PGDN'],
  'end' : [35, 'End', 'KC_HOME'],
  'home' : [36, 'Home', 'KC_END'],
  '→' : [37, 'ArrowRight', 'KC_RIGHT'],
  '↑' : [38, 'ArrowUp', 'KC_UP'],
  '←' : [39, 'ArrowLeft', 'KC_LEFT'],
  '↓' : [40, 'ArrowDown', 'KC_DOWN'],
  'prtsc' : [44, 'PrintScreen', 'KC_PSCR'],
  'insert' : [45, 'Insert', 'KC_INS'],
  'delete' : [46, 'Delete', 'KC_DEL'],

  ')0' : [48, 'Digit0', 'KC_P0'],
  '!1' : [49, 'Digit1', 'KC_P1'],
  '@2' : [50, 'Digit2', 'KC_P2'],
  '#3' : [51, 'Digit3', 'KC_P3'],
  '$4' : [52, 'Digit4', 'KC_P4'],
  '%5' : [53, 'Digit5', 'KC_P5'],
  '^6' : [54, 'Digit6', 'KC_P6'],
  '&7' : [55, 'Digit7', 'KC_P7'],
  '*8' : [56, 'Digit8', 'KC_P8'],
  '(9' : [57, 'Digit9', 'KC_P9'],

  'a' : [65, 'KeyA', 'KC_A'],
  'b' : [66, 'KeyB', 'KC_B'],
  'c' : [67, 'KeyC', 'KC_C'],
  'd' : [68, 'KeyD', 'KC_D'],
  'e' : [69, 'KeyE', 'KC_E'],
  'f' : [70, 'KeyF', 'KC_F'],
  'g' : [71, 'KeyG', 'KC_G'],
  'h' : [72, 'KeyH', 'KC_H'],
  'i' : [73, 'KeyI', 'KC_I'],
  'j' : [74, 'KeyJ', 'KC_J'],
  'k' : [75, 'KeyK', 'KC_K'],
  'l' : [76, 'KeyL', 'KC_L'],
  'm' : [77, 'KeyM', 'KC_M'],
  'n' : [78, 'KeyN', 'KC_N'],
  'o' : [79, 'KeyO', 'KC_O'],
  'p' : [80, 'KeyP', 'KC_P'],
  'q' : [81, 'KeyQ', 'KC_Q'],
  'r' : [82, 'KeyR', 'KC_R'],
  's' : [83, 'KeyS', 'KC_S'],
  't' : [84, 'KeyT', 'KC_T'],
  'u' : [85, 'KeyU', 'KC_U'],
  'v' : [86, 'KeyV', 'KC_V'],
  'w' : [87, 'KeyW', 'KC_W'],
  'x' : [88, 'KeyX', 'KC_X'],
  'y' : [89, 'KeyY', 'KC_Y'],
  'z' : [90, 'KeyZ', 'KC_Z'],

  'win' : [91, 'OSLeft', 'KC_LGUI'],
  'rightwin' : [91, 'OSRight', 'KC_RGUI'],
  'menu' : [93, 'ContextMenu', 'KC_APP'],

  '0ins' : [96, 'Numpad0', 'KC_P0'],
  '1end' : [97, 'Numpad1', 'KC_P'],
  '2↓' : [98, 'Numpad2', 'KC_P'],
  '3pgdn' : [99, 'Numpad3', 'KC_P'],
  '4←' : [100, 'Numpad4', 'KC_P'],
  '5' : [101, 'Numpad5', 'KC_P'],
  '6→' : [102, 'Numpad6', 'KC_P'],
  '7home' : [103, 'Numpad7', 'KC_P'],
  '8↑' : [104, 'Numpad8', 'KC_P'],
  '9pgup' : [105, 'Numpad9', 'KC_P'],
  '*' : [106, 'NumpadMultiply', 'KC_PAST'],
  '+' : [107, 'NumpadAdd', 'KC_PPLS'],
  'penter' : [108, 'NumpadDecimal', 'KC_PENT'],
  '-' : [109, 'NumpadSubtract', 'KC_PMINS'],
  '.del' : [110, 'NumpadDecimal', 'KC_PDOT'],
  '/' : [111, '	NumpadDivide', 'KC_PSLS'],

  'f1' : [112, 'F1', 'KC_F1'],
  'f2' : [113, 'F2', 'KC_F2'],
  'f3' : [114, 'F3', 'KC_F3'],
  'f4' : [115, 'F4', 'KC_F4'],
  'f5' : [116, 'F5', 'KC_F5'],
  'f6' : [117, 'F6', 'KC_F6'],
  'f7' : [118, 'F7', 'KC_F7'],
  'f8' : [119, 'F8', 'KC_F8'],
  'f9' : [120, 'F9', 'KC_F9'],
  'f10' : [121, 'F10', 'KC_F10'],
  'f11' : [122, 'F11', 'KC_F11'],
  'f12' : [123, 'F12', 'KC_F12'],

  'numlock' : [144, 'NumLock', 'KC_NLCK'],
  'scrolllock' : [145, 'ScrollLock', 'KC_SLCK'],
  
  'stop' : [178, 'Stop', 'KC_STOP'],

  'mute' : [181, 'VolumeMute', 'KC_MUTE'],
  'vol-' : [182, 'VolumeDown', 'KC_VOLD'],
  'vol+' : [183, 'VolumeUp', 'KC_VOLU'],

  ':;' : [186, 'Semicolon', 'KC_SCLN'],
  '+=' : [187, 'Equal', 'KC_EQL'],
  '<,' : [188, 'Comma', 'KC_COMM'],
  '_-' : [189, 'Minus', 'KC_MINS'],
  '>.' : [190, 'Period', 'KC_DOT'],
  '?/' : [191, 'Slash', 'KC_SLSH'],
  '~`' : [192, 'Backquote', 'KC_GRV'],

  '{[' : [219, 'BracketLeft', 'KC_LBRC'],
  '|\\' : [220, 'Backslash', 'KC_BSLS'],
  '}]' : [221, 'BracketRight', 'KC_RBRC'],
  '\"\'' : [222, 'Quote', 'KC_QUOT']
}

export default { keyStr2code }
