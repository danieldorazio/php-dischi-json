<?php 
//prelevare dati dai file 
$string = file_get_contents("dischi.json");

//trasformo stringa in un arrya 
$list = json_decode($string, true);

//operazioni sui dati che dobbiamo fare

if (isset($_GET['id'])) {
    $selected_disk = $list[$_GET['id']];
    $json = json_encode(($selected_disk));
} else {
    $json = json_encode($list);
}


//invio dati al client
header("Content-Type: application/json");
echo $json;
?>