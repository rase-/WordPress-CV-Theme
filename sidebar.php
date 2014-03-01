<div id="sidebar">

<h2>Pages</h2>
<div id="pages" class="list">
<ul>
<?php $pages = get_pages(); ?>
<?php foreach ($pages as $page): ?>
  <li><a href="<?php echo get_page_link($page->ID); ?>"><?php echo $page->post_title; ?></a></li>
<?php endforeach; ?>
</ul>
</div>

<h2>Entries</h2>
<div id="entries" class="list">
<ul>
<?php wp_get_archives('type=postbypost'); ?>
</ul>
</div>

</div>
