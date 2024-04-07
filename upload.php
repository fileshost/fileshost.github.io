<?php
$adminPassword = "cgOMOjwEaXc1bkDXFijhAW3fKM0E9H";
$uploadDir = "./uploads/";

$filename = $_POST['filename'];
$password = $_POST['password'];

if ($filename && $password === $adminPassword) {
    $targetFile = $uploadDir . basename($_FILES["file"]["name"]);
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    if ($fileType === "jpg" || $fileType === "png") {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
            echo "File uploaded successfully!";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "Invalid file format. Only JPG and PNG files are allowed.";
    }
} else {
    echo "Invalid filename or admin password.";
}
?>
