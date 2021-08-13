<?php

//extract data from the post
//set POST variables
$url = 'https://aiabeu.com/certified_organization/get_certificate_detail_by_cbid';

$fields = array(
	'cb_id' => urlencode('62'),
	'certificate_number' => urlencode($_POST['certificate_number'])
);

//url-ify the data for the POST
$fields_string = "";
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');
//echo "$fields_string";
//open connection
$ch = curl_init();

//set the url, number of POST , POST dvarsata
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

//execute post
$result = curl_exec($ch);

//close connection
curl_close($ch);

?>
