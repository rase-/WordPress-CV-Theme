<?php get_header(); ?>
<div class="back nav hidden"><label for="prev">&#x2039</label></div>
<div id="content">

  <!-- Take the first post separately so we can anchor it -->
  <?php if (have_posts()) : the_post(); ?>
  <div id="first-post" class="post">
    <div id="fixed">
      <h1 id="permalink"><a class="permalink" href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
      <p><?php the_content(__('Read more')); ?></p>
    </div>
  </div>
  <?php else: ?>
  <p><?php _e('Sorry, no posts available. The first post you create will be the header of your CV. There you can put for example an image of yourself, and your name.'); ?></p><?php endif; ?>

  <div id="main">
    <!-- Render the rest of the posts, and these are the ones with actual content -->
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <div class="post">
      <!-- No need to print the h1 if there is no title -->
      <?php if (get_the_title()): ?>
      <h1><a class="permalink" href="<?php the_permalink() ?>"><?php the_title(); ?><i class="icon-link-ext"></i></a></h1>
      <?php endif; ?>

      <p><?php the_content(__('Read more')); ?></p>
    </div>
    <hr>
    <?php endwhile; else: ?>
  <p><?php _e('Sorry, no posts available. Posts made after the first post will be shown as CV entries. Create one and you will see how it works!'); ?></p><?php endif; ?>
  </div>

  <div id="delimiter">
  </div>

  <?php get_footer(); ?>
</div> <!-- close content -->
