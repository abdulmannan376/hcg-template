<?php
header('Content-Type: application/json');

// Retrieve JSON data from the request
$input = json_decode(file_get_contents('php://input'), true);

// Check if required fields are present
if (empty($input['name']) || empty($input['email']) || empty($input['message'])) {
    echo json_encode(['status' => false, 'message' => 'Please fill in all fields.']);
    exit;
}

$sendTo = 'balaj.ali707@gmail.com';
$okMessage = 'Contact form successfully submitted. Thank you, we will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

try {
    $from = $input['email'];
    $message = $input['message'];
    $subject = $input['name'];
    $headers = 'From: ' . $from . "\r\n" .
               'Reply-To: ' . $sendTo . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($sendTo, $subject, $message, $headers)) {
        echo json_encode(['status' => true, 'message' => $okMessage]);
    } else {
        echo json_encode(['status' => false, 'message' => $errorMessage]);
    }
} catch (Exception $e) {
    echo json_encode(['status' => false, 'message' => $errorMessage]);
}
