import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BARCODE_CODE = `
def generate_barcode(ticket_id: str, private_key):
    timestamp = int(time.time() // 30)
    barcode_data = json.dumps({"i": ticket_id, "t": timestamp})
    signature = private_key.sign(
        barcode_data.encode(),
        padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=32),
        hashes.SHA256()
    )
    barcode_payload = base64.b32encode(barcode_data.encode()).decode()
    signature_payload = base64.b32encode(signature).decode()
    barcode_final = json.dumps({"d": barcode_payload, "s": signature_payload})
    print(f"Generated barcode: {barcode_final}")
    qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=10, border=4)
    qr.add_data(barcode_final)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')
    buffer = BytesIO()
    img.save(buffer, format='PNG')
    buffer.seek(0)
    return buffer`;

export default function StadiumTicketingResearch() {
  return (
    <div className="min-h-screen bg-gray-900 p-10 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-5xl font-bold text-white">
          Stadium Ticketing Research
        </h1>
        <p className="mt-4 text-center text-gray-400">
          This research explores a secure ticketing system that leverages RSA
          cryptography and Redis for real-time verification. It prevents ticket
          fraud using a rotating barcode mechanism.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <h2 className="text-3xl font-semibold text-white">System Overview</h2>
        <p className="mt-4 text-gray-400">
          The ticketing system consists of a Flask web server, a Redis database,
          and a frontend built with Angular. It generates, verifies, and manages
          digital tickets securely.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-white">Key Features</h2>
        <ul className="mt-2 list-inside list-disc text-gray-400">
          <li>RSA key generation and management for cryptographic security</li>
          <li>Rotating QR codes to prevent ticket reuse and fraud</li>
          <li>Redis-backed real-time ticket validation</li>
          <li>Frontend integration with Angular and a QR code scanner</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold text-white">
          Implementation Details
        </h2>
        <h3 className="mt-4 text-xl font-semibold text-gray-300">
          RSA Key Management
        </h3>
        <p className="mt-2 text-gray-400">
          The system generates an RSA key pair for signing and verifying
          tickets. Keys are stored in PEM format.
        </p>

        <h3 className="mt-4 text-xl font-semibold text-gray-300">
          QR Code Generation
        </h3>
        <br />
        <SyntaxHighlighter
          language="python"
          style={dracula}
          showLineNumbers={true}
        >
          {BARCODE_CODE}
        </SyntaxHighlighter>
        <br />
        <p className="mt-2 text-gray-400">
          The function generate_barcode takes a ticket ID and a private key to
          create a secure QR code image that encodes ticket information. It
          constructs a JSON string containing the ticket ID and timestamp, signs
          it using RSA-PSS with SHA-256, and encodes the resulting data to
          produce the final payload used for QR code generation.
        </p>

        <h3 className="mt-4 text-xl font-semibold text-gray-300">
          Real-time Verification
        </h3>
        <p className="mt-2 text-gray-400">
          When a ticket is scanned, the system checks Redis to ensure it has not
          been previously used. If valid, access is granted; otherwise, an error
          is displayed.
        </p>
      </div>
    </div>
  );
}
