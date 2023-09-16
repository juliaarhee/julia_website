<script>
  document.body.addEventListener('wheel', function(e) {
    document.getElementById('biography').scrollTop += e.deltaY;
  });
</script>