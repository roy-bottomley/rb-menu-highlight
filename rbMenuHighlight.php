<?php
/*
Plugin Name: RB Menu Highlight
Plugin URI: http://www.github.com
Description: This is a simple menu highlight plugin.
Version: 1.0
Author: Roy Bottomley
*/
?>

<?php
function plugin_name_scripts() {
wp_enqueue_script( 'script', plugins_url('js/menu_script.js', __FILE__), array('jquery'));
}
add_action('init', 'plugin_name_scripts');

?>

