const buttons = [
    { button: document.getElementById('toggleButton1'), image: document.getElementById('buttonImage1'), stateKey: 'buttonState1', onImage: '/img/iconmiui12/sis/status_bar_toggle_bluetooth_on.png', offImage: '/img/iconmiui12/sis/status_bar_toggle_bluetooth_off.png' },
    { button: document.getElementById('toggleButton2'), image: document.getElementById('buttonImage2'), stateKey: 'buttonState2', onImage: '/img/iconmiui12/sis/status_bar_toggle_wifi_on.png', offImage: '/img/iconmiui12/sis/status_bar_toggle_wifi_off.png' },
    { button: document.getElementById('toggleButton3'), image: document.getElementById('buttonImage3'), stateKey: 'buttonState3', onImage: '/img/iconmiui12/sis/status_bar_toggle_data_on.png', offImage: '/img/iconmiui12/sis/status_bar_toggle_data_off.png' }
  ];

  buttons.forEach(buttonData => {
    let isOn = localStorage.getItem(buttonData.stateKey) === 'on';

    if (isOn === null) {
      isOn = true;
      localStorage.setItem(buttonData.stateKey, 'on');
    }

    if (isOn) {
      buttonData.image.src = buttonData.onImage;
      buttonData.image.alt = 'On';
    } else {
      buttonData.image.src = buttonData.offImage;
      buttonData.image.alt = 'Off';
    }

    buttonData.button.addEventListener('click', () => {
      isOn = !isOn;
      localStorage.setItem(buttonData.stateKey, isOn ? 'on' : 'off');

      if (isOn) {
        buttonData.image.src = buttonData.onImage;
        buttonData.image.alt = 'On';
      } else {
        buttonData.image.src = buttonData.offImage;
        buttonData.image.alt = 'Off';
      }
    });
  });