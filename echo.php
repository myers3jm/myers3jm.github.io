<?php
    $data = htmlentites($_REQUEST["data"]);
    if ($data != "") {
        echo $data;
    }
?>