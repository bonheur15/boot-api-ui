export function initialize(/* appInstance */) {
  document.addEventListener('DOMContentLoaded', () => {
    const gear = document.getElementById('gear');
    const water = document.getElementById('water-animation');

    if (gear && water) {
      gear.addEventListener('click', () => {
        water.classList.toggle('fill');
      });
    }
  });
}

export default {
  initialize,
};
// to be deleted
