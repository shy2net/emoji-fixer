<?php

/**
 * Plugin Name: emoji-fixer
 * Plugin URI: https://nemex-studios.com/
 * Description: A simple lightweight plugin which fixes uncolored emojis (black and white) caused in headline tags and bold fonts.
 * Version: 1.0
 * Author: Shynet
 * Author URI: https://nemex-studios.com/
 **/

add_action('wp_enqueue_scripts', 'emoji_fixer_init');

function emoji_fixer_init()
{
    wp_enqueue_script('emoji-fixer', plugins_url(('/emoji-fixer/js/index.js')));
}
