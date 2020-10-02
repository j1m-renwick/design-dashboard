export const states = [
    {
        instructionText: "Drag the certificate icon from Google.com to the target directory to get the certificate file. <br/>In this example, the certificate is <b>DER-encrypted</b>.",
        certificateFileImg: {opacity: 0},
        certificateIssuerImg: {opacity: 0},
        certificateIssuerPubKeyImg: {opacity: 0},
        certificateHexBinImg: {opacity: 0},
        certificateHashedImg: {opacity: 0},
        certificateView: {opacity: 0}
    },
    {
        instructionText: "Drag the certificate icon from Google.com to the target directory to get the certificate file. <br/>In this example, the certificate is <b>DER-encrypted</b>.",
        certificateFileImg: {opacity: 1}
    },
    {
        instructionText: "Open the certificate in plain text format, extract the hexadecimal signature and store it as a binary file.<br/>(In the example above, the signature is highlighted in pink.)",
        consoleText: "openssl x509 -in *.google.com.cer -inform DER -text -noout -certopt ca_default -certopt no_validity -certopt no_serial -certopt no_subject -certopt no_extensions -certopt no_signame | grep -v 'Signature Algorithm' | tr -d '[:space:]:' | xxd -r -p > cert-signature-hex.bin",
        certificateView: {opacity: 1}
    },
    {
        instructionText: "Open the certificate in plain text format, extract the hexadecimal signature and store it as a binary file.",
        consoleText: "openssl x509 -in *.google.com.cer -inform DER -text -noout -certopt ca_default -certopt no_validity -certopt no_serial -certopt no_subject -certopt no_extensions -certopt no_signame | grep -v 'Signature Algorithm' | tr -d '[:space:]:' | xxd -r -p > cert-signature-hex.bin",
        certificateHexBinImg: {opacity: 1}
    },
    {
        instructionText: "Open the certificate in plain text format, and extract the CA Issuer URL.<br/>(In the example above, the URL is highlighted in green.)",
        consoleText: "openssl x509 -in *.google.com.cer -inform DER -text -noout | grep -o 'CA Issuers - URI:.*' | cut -d ':' -f2-",
        consoleOutputText: "http://pki.goog/gsr2/GTS1O1.crt"
    },
    {
        instructionText: "Save the CA Issuer certificate using this URL. <br/>In this example, the saved certificate is <b>DER-encrypted</b>.",
        consoleText: "curl http://pki.goog/gsr2/GTS1O1.crt > issuer.cer",
    },
    {
        instructionText: "Save the CA Issuer certificate using this URL. <br/>In this example, the saved certificate is <b>DER-encrypted</b>.",
        consoleText: "curl http://pki.goog/gsr2/GTS1O1.crt > issuer.cer",
        certificateIssuerImg: {opacity: 1}
    },
    {
        instructionText: "Obtain and save the CA Issuer's public key in <b>PEM</b> format.",
        consoleText: "openssl x509 -in issuer.cer -inform DER -noout -pubkey > issuer-pubkey.pem"
    },
    {
        instructionText: "Obtain and save the CA Issuer's public key in <b>PEM</b> format.",
        consoleText: "openssl x509 -in issuer.cer -inform DER -noout -pubkey > issuer-pubkey.pem",
        certificateIssuerPubKeyImg: {opacity: 1}
    },
    {
        instructionText: "Decrypt the hexadecimal signature using the CA Issuer's public key, and extract the signature hash in text form.",
        consoleText: "openssl rsautl -verify -inkey issuer-pubkey.pem -in cert-signature-hex.bin -pubin | openssl asn1parse -inform DER | grep -o '\\[HEX DUMP\\]:.*' | cut -d \":\"  -f2",
        consoleOutputText: "CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505"
    },
    {
        instructionText: "Create a hash based on the Google.com certificate, and store it as a binary file.",
        consoleText: "openssl asn1parse -in *.google.com.cer -inform DER -strparse 4 -out certificate-hash.bin -noout"
    },
    {
        instructionText: "Create and store a binary file representing the Google.com certificate.",
        consoleText: "openssl asn1parse -in *.google.com.cer -inform DER -strparse 4 -out certificate-hash.bin -noout",
        certificateHashedImg: {opacity: 1}
    },
    {
        instructionText: "Create a hash from the binary file, based on the hashing algorithm given in the certificate.<br/>In this example, the algorithm is <b>SHA-256</b>.",
        consoleText: "openssl dgst -sha256 certificate-hash.bin",
        consoleOutputText: "cd55ba8e69bcc9a1c2aaba552982abd5519051f5708cb6f9885cd3a7d28cd505"
    }
]