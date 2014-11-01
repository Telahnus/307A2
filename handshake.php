<?php

// Database params
$servername = "localhost";
$username = "root";
$password = "M3mp3r0r";
$dbname = "Q2DB";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = "Mojo";
//$name = (isset($_GET['user']) ? $_GET['user'] : null);
//echo $name;
$sql = "SELECT shared_key FROM members WHERE username = '$name'";
$result = mysqli_query($conn, $sql);

$key="-1";
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $key = $row['shared_key'];
        echo "Key: ".$key;
    }
} else {
    echo "0 results";
}

mysqli_close($conn);

?>