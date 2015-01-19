
<script>
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });
</script>
<audio  class="audiojs"  preload="auto">
  <?php foreach ($sources as $source): ?>
    <source src="<?php print $source['url']; ?>" type='<?php print $source['mime']; ?>'>
  <?php endforeach; ?>
</audio>
