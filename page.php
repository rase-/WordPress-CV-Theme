<?php get_header(); ?>
<div class="back nav hidden"><label for="prev">&#x2039</label></div>
<div id="content">

  <?php if (have_posts()) : the_post(); ?>
  <div class="post page">
    <h1><a class="permalink" href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
    <p><?php the_content(__('(more...)')); ?></p>
  </div>
  <?php else: ?>
  <p><?php _e('Sorry, no posts available. The first post you create will be the header of your CV. There you can put for example an image of yourself, and your name.'); ?></p><?php endif; ?>

<div id="delimiter">
</div>
<?php get_footer(); ?>
