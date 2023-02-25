const name = document.getElementById('name');
const screw = document.getElementById('screw');

screw.addEventListener('mousedown', function() {
  name.style.transform = 'rotate(-90deg)';
});

screw.addEventListener('mouseup', function() {
  name.style.transform = 'none';
});
