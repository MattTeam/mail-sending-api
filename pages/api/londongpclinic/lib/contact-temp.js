const contactTmep = async (data)=>{
    var currDate = new Date();
    var mailContent =
    '<!doctype html>' +
    '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">'+
    '<head>'+
    '<!--[if gte mso 15]>'+
        '<xml>'+
            '<o:OfficeDocumentSettings>'+
            '<o:AllowPNG/>'+
            '<o:PixelsPerInch>96</o:PixelsPerInch>'+
            '</o:OfficeDocumentSettings>'+
        '</xml>'+
        '<![endif]-->'+
        '<meta charset="UTF-8">'+
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1">'+
        '<title>*|MC:SUBJECT|*</title>'+
        '<style type="text/css">'+
		'p{margin:10px 0;padding:0;}'+
		'table{border-collapse:collapse;}'+
		'h1,h2,h3,h4,h5,h6{display:block;margin:0;padding:0;}'+
		'img,a img{ border:0; height:auto; outline:none; text-decoration:none; }'+
		'body,#bodyTable,#bodyCell{ height:100%; margin:0; padding:0; width:100%;}'+
		'.mcnPreviewText{ display:none !important; }'+
		'#outlook a{ padding:0; }'+
		'img{ -ms-interpolation-mode:bicubic; }'+
		'table{ mso-table-lspace:0pt; mso-table-rspace:0pt; }'+
		'.ReadMsgBody{ width:100%; }'+
		'.ExternalClass{ width:100%; }'+
		'p,a,li,td,blockquote{ mso-line-height-rule:exactly; }'+
		'a[href^=tel],a[href^=sms]{ color:inherit; cursor:default; text-decoration:none; }'+
		'p,a,li,td,body,table,blockquote{ -ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; }'+
		'.ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{ line-height:100%;}'+
		'a[x-apple-data-detectors]{ color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;}'+
		'.templateContainer{ max-width:600px !important; }'+
		'a.mcnButton{ display:block; }'+
		'.mcnImage,.mcnRetinaImage{ vertical-align:bottom;}'+
		'.mcnTextContent{ word-break:break-word; }'+
		'.mcnTextContent img{ height:auto !important;}'+
		'.mcnDividerBlock{ table-layout:fixed !important;}'+
		'h1{color:#222222; font-family:Helvetica; font-size:40px; font-style:normal; font-weight:bold; line-height:150%;letter-spacing:normal;text-align:center;}'+
		'h2{color:#222222;font-family:Helvetica;font-size:34px;font-style:normal;font-weight:bold;line-height:150%;letter-spacing:normal;text-align:left;}'+
 
		'h3{ color:#444444; font-family:Helvetica; font-size:22px; font-style:normal; font-weight:bold; line-height:150%; letter-spacing:normal;text-align:left;}'+
	 
		'h4{color:#949494; font-family:Georgia; font-size:20px; font-style:italic; font-weight:normal; line-height:125%;letter-spacing:normal;text-align:left;}'+
	 
		'#templateHeader{background-color:#f7f7f7;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:45px;padding-bottom:45px;}'+
	 
		'.headerContainer{ background-color:#transparent; background-image:none; background-repeat:no-repeat; background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:0;padding-bottom:0;}'+
	 
		'.headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{color:#757575;font-family:Helvetica;font-size:16px;line-height:150%;text-align:left;}'+
	 
		'.headerContainer .mcnTextContent a,.headerContainer .mcnTextContent p a{color:#007C89;font-weight:normal;text-decoration:underline;}'+
 
		'#templateBody{ background-color:#ffffff; background-image:none; background-repeat:no-repeat; background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:89px;padding-bottom:89px;}'+
 
		'.bodyContainer{ background-color:#transparent; background-image:none; background-repeat:no-repeat; background-position:center;background-size:cover;border-top:0; border-bottom:0; padding-top:0; padding-bottom:0; }'+
	 
		'.bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{color:#757575; font-family:Helvetica; font-size:16px; line-height:150%; text-align:left;}'+
	 
		'.bodyContainer .mcnTextContent a,.bodyContainer .mcnTextContent p a{ color:#007C89; font-weight:normal; text-decoration:underline; }'+
	 
		'#templateFooter{background-color:#333333; background-image:none; background-repeat:no-repeat;background-position:center; background-size:cover; border-top:0; border-bottom:0;padding-top:45px; padding-bottom:63px; }'+
	 
		'.footerContainer{background-color:#transparent; background-image:none; background-repeat:no-repeat; background-position:center; background-size:cover; border-top:0; border-bottom:0; padding-top:0; padding-bottom:0;}'+
	 
		'.footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{ color:#FFFFFF; font-family:Helvetica; font-size:12px; line-height:150%; text-align:center; }'+
	 
		'.footerContainer .mcnTextContent a,.footerContainer .mcnTextContent p a{ color:#FFFFFF; font-weight:normal; text-decoration:underline; }'+
	'@media only screen and (min-width:768px){'+
		'.templateContainer{'+
			'width:600px !important;'+
		'}'+

    '}'+	
    '@media only screen and (max-width: 480px){'+
            'body,table,td,p,a,li,blockquote{ -webkit-text-size-adjust:none !important; }'+

    '}@media only screen and (max-width: 480px){'+
            'body{ width:100% !important; min-width:100% !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnRetinaImage{ max-width:100% !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnImage{width:100% !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{'+
                'max-width:100% !important; width:100% !important;'+
           ' }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnBoxedTextContentContainer{ min-width:100% !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnImageGroupContent{ padding:9px !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{'+
                'padding-top:9px !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{'+
                'padding-top:18px !important;}'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnImageCardBottomImageContent{ padding-bottom:9px !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnImageGroupBlockInner{ padding-top:0 !important; padding-bottom:0 !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnImageGroupBlockOuter{ padding-top:9px !important; padding-bottom:9px !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnTextContent,.mcnBoxedTextContentColumn{ padding-right:18px !important; padding-left:18px !important; }'+

    '}@media only screen and (max-width: 480px){'+
            '.mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{ padding-right:18px !important; padding-bottom:0 !important; padding-left:18px !important;}'+

    '}@media only screen and (max-width: 480px){'+
            '.mcpreview-image-uploader{ display:none !important; width:100% !important; }'+

    '}@media only screen and (max-width: 480px){'+
       
            'h1{ font-size:30px !important; line-height:125% !important; }'+

    '}@media only screen and (max-width: 480px){'+
        
            'h2{ font-size:26px !important; line-height:125% !important; }'+

    '}@media only screen and (max-width: 480px){'+
        
            'h3{ font-size:20px !important; line-height:150% !important; }'+

    '}@media only screen and (max-width: 480px){'+
       
            'h4{ font-size:18px !important; line-height:150% !important; }'+

    '}@media only screen and (max-width: 480px){'+
        
            '.mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{ font-size:14px !important; line-height:150% !important; }'+

    '}@media only screen and (max-width: 480px){'+
        
            '.headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{ font-size:16px !important; line-height:150% !important; }'+

    '}@media only screen and (max-width: 480px){'+
        
            '.bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{ font-size:16px !important; line-height:150% !important; }'+

    '}@media only screen and (max-width: 480px){'+
        
            '.footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{ font-size:14px !important; line-height:150% !important; }'+

    '}'+
    '</style>'+

    '</head> <body>'+
        '<!--*|IF:MC_PREVIEW_TEXT|*-->'+
        '<!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span><!--<![endif]-->'+
        '<!--*|END:IF|*-->'+
        '<center><table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">'+
            '<tr> <td align="center" valign="top" id="bodyCell">'+
                    '<!-- BEGIN TEMPLATE // -->'+
                    '<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
                        '<tr><td align="center" valign="top" id="templateHeader" data-template-container>'+
                            '<!--[if (gte mso 9)|(IE)]>'+
                            '<table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">'+
                            '<tr><td align="center" valign="top" width="600" style="width:600px;">'+
                            '<![endif]-->'+
                            '<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">'+
                                '<tr><td valign="top" class="headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnBoxedTextBlock" style="min-width:100%;">'+
    '<!--[if gte mso 9]>'+
	'<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%">'+
	'<![endif]--> <tbody class="mcnBoxedTextBlockOuter">'+
        '<tr> <td valign="top" class="mcnBoxedTextBlockInner">'+
                
				'<!--[if gte mso 9]> <td align="center" valign="top" "> <![endif]-->'+
                '<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnBoxedTextContentContainer">'+
                    '<tbody><tr>'+
                        
                        '<td style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:18px;">'+
                        
                            '<table border="0" cellspacing="0" class="mcnTextContentContainer" width="100%" style="min-width: 100% !important;background-color: #fff;border: 3px outset #61c4ee;">'+
                                '<tbody><tr> <td valign="top" class="mcnTextContent" style="padding: 18px;color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 14px;font-weight: normal;line-height: 180%;text-align: center;">'+
                                        '<table> <tbody> <tr> <td>'+
                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 14px;font-weight: normal;line-height: 180%;text-align: center;">&nbsp;<img data-file-id="5426324" height="80" src="https://www.londongpclinic.co.uk/public/design/images/logo.png" style="border: 0px  ; width: 220px; height: 62px; margin: 0px;" width="433"><br></p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 14px;font-weight: normal;line-height: 180%;text-align: left;"><span style="font-size:18px">Dear Admin,</span></p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 14px;font-weight: normal;line-height: 180%;text-align: left;"><span style="font-size:18px;line-height: 20px"><span style="color:#32409a"><strong>A contact request has been received with following details on '+currDate+' </strong></span>&nbsp;</span><br>&nbsp;</p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 16px;font-weight: normal;line-height: 180%;text-align: left;"><strong>Name :</strong> '+data.name+'</p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 16px;font-weight: normal;line-height: 180%;text-align: left;"><strong>Email:</strong> '+ data.email +' </p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 16px;font-weight: normal;line-height: 180%;text-align: left;"><strong>Phone:</strong> '+ data.phone +' </p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 16px;font-weight: normal;line-height: 180%;text-align: left;"><strong>Subject:</strong> New contact request using nextjs SMTP with Template!</p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 16px;font-weight: normal;line-height: 180%;text-align: left;"><strong>Message :</strong> '+ data.message +' </p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 16px;font-weight: normal;line-height: 180%;text-align: center;">&nbsp;</p>'+

                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 16px;font-weight: normal;line-height: 180%;text-align: center; margin-bottom: 0;">Regards</p>'+
                                            
                                            '<p style="color: #534A4A;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 16px;font-weight: normal;line-height: 180%;text-align: center;margin-top: 0;">Administrator</p>'+

                                            '<p style="color: #32409a;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 18px;font-weight: normal;line-height: 180%;text-align: center;"><strong>London GP Clinic</strong></p>'+
                                        '</td> </tr> </tbody> </table>'+

                                    '</td> </tr> </tbody></table>'+
                        '</td> </tr> </tbody></table>'+
				'<!--[if gte mso 9]>'+
				'</td>'+
				'<![endif]--> '+
				'<!--[if gte mso 9]>'+
                '</tr>'+
                '</table>'+
				'<![endif]-->'+
            '</td> </tr> </tbody> </table>'+
            '</td> </tr> </table> <!--[if (gte mso 9)|(IE)]>'+
        '</td> </tr> </table> <![endif]--> </td> </tr> </table>'+
        '<!-- // END TEMPLATE -->'+
        '</td> </tr> </table> </center>'+
    '</body></html>';

    return mailContent ; 
}

module.exports =  contactTmep;
