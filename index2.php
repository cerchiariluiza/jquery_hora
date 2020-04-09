<?php
if (!(isset($_GET["TESTE"]))){

	echo '<a href="index2.php?teste=carros">Carros</a><br/>';

	echo '<a href="index2.php?teste=aviões">Aviões</a><br/>';
} else {

if ($_GET["TESTE"]=="carros"){
echo 'Carros Andam na terra.';
}
if ($_GET["TESTE"]=="aviões"){
echo 'Aviões andam no ar.';
}




}
?>