export default function PulseViewCapture() {
  return (
    <div className="min-h-screen bg-gray-900 p-10 text-white">
      <header className="mb-8">
        <h1 className="mb-4 text-center text-5xl font-bold text-white">
          PulseView Capture
        </h1>
        <p className="mx-auto max-w-2xl text-center text-gray-400">
          A real-time video streaming application that allows mobile phones to
          stream video to an admin panel using WebRTC technology.
        </p>
      </header>

      <section className="mb-6">
        <h2 className="mb-3 text-3xl font-semibold text-white">Overview</h2>
        <p className="mb-4 text-gray-400">
          PulseView Capture enables multiple phones to connect and stream video
          to a central admin panel. The admin can view and switch between live
          streams in real-time. The solution leverages WebRTC for low-latency
          communication combined with secure HTTPS connections and a responsive
          interface.
        </p>
        <p className="mb-4 text-gray-400">
          PulseView Capture enhances real-time engagement by allowing multiple
          perspectives to be captured simultaneously during events. It collects
          live video streams from fan devices and consolidates them into a
          single, manageable admin interface.
        </p>
        <p className="mb-4 text-gray-400">
          This capability is particularly valuable in stadium environments where
          capturing the excitement and energy of the crowd from multiple angles
          enriches the in-game experience. Whether during pre-game hype,
          critical game moments, or post-game celebrations, PulseView Capture
          allows administrators to dynamically switch between various live fan
          feeds, adding a personal and community-driven touch to the event
          broadcast.
        </p>
        <ul className="list-inside list-disc space-y-1 text-gray-400">
          <li>
            <span className="font-medium">WebRTC-based streaming:</span>{" "}
            Low-latency, peer-to-peer communication.
          </li>
          <li>
            <span className="font-medium">Multiple device support:</span>{" "}
            Simultaneous connection from multiple phones.
          </li>
          <li>
            <span className="font-medium">Secure communications:</span> Utilizes
            HTTPS with SSL certificates for safe streaming.
          </li>
          <li>
            <span className="font-medium">QR code integration:</span> Quick
            phone connection by scanning a code on the admin panel.
          </li>
          <li>
            <span className="font-medium">Responsive UI:</span> Adapts to
            various device sizes effortlessly.
          </li>
          <li>
            <span className="font-medium">Auto-reconnect:</span> Automatically
            re-establishes connection if lost.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-3xl font-semibold text-white">How It Works</h2>
        <ol className="list-inside list-decimal space-y-2 text-gray-400">
          <li>
            <span className="font-medium">Admin Panel:</span> Access the admin
            interface at
            <code className="mx-1 bg-gray-800 px-1 text-gray-200">
              https://localhost:3000/admin.html
            </code>
          </li>
          <li>
            <span className="font-medium">Phone Connection:</span> Phones
            connect using
            <code className="mx-1 bg-gray-800 px-1 text-gray-200">
              https://localhost:3000/phone.html
            </code>{" "}
            or by scanning the QR code on the admin panel.
          </li>
          <li>
            <span className="font-medium">Signaling & Streaming:</span>{" "}
            Socket.IO exchanges WebRTC signaling messages (offers, answers, and
            ICE candidates) to establish a direct connection.
          </li>
          <li>
            <span className="font-medium">Stream Switching:</span> The admin
            interface lists active streams and allows switching views between
            them.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-3xl font-semibold text-white">
          What is WebRTC?
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WmR9IMUD_CY?si=VeeveNaC8BoLypcc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="mb-4 text-gray-400">
          WebRTC (Web Real-Time Communication) is an open-source framework that
          allows web browsers to communicate in real-time without plugins. It
          provides APIs to capture media, establish peer-to-peer connections,
          and share data directly.
        </p>
        <ul className="list-inside list-disc space-y-1 text-gray-400">
          <li>
            <span className="font-medium">getUserMedia:</span> Captures audio
            and video from local devices.
          </li>
          <li>
            <span className="font-medium">RTCPeerConnection:</span> Manages
            connections and enables the exchange of media streams.
          </li>
          <li>
            <span className="font-medium">RTCDataChannel:</span> Facilitates
            direct data communication between peers.
          </li>
          <li>
            <span className="font-medium">Signaling Mechanism:</span> Uses a
            signaling protocol (e.g., Socket.IO) to exchange connection details.
          </li>
        </ul>
      </section>
    </div>
  );
}
