<?php get_header(); ?>
<div id="content">

  <?php if (have_posts()) : the_post(); ?>
  <div class="post single">
    <h1><a class="permalink" href="<?php the_permalink() ?>"><?php the_title(); ?><i class="icon-link-ext"></i></a></h1>
    <p><?php the_content(__('(more...)')); ?></p>
  </div>
  <?php else: ?>
  <p><?php _e('Sorry, no posts available. The first post you create will be the header of your CV. There you can put for example an image of yourself, and your name.'); ?></p><?php endif; ?>

</div>
  <!--<?php get_sidebar(); ?>-->
</div>

<div id="delimiter">
</div>

<?php get_footer(); ?>
