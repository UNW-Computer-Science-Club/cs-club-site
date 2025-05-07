import Link from "next/link";

interface TableData {
  time: string;
  speedDown: string;
  speedUp: string;
  note: string;
}

export default function SportsGames() {
  const cellularData: TableData[] = [
    { time: "7:29 PM", speedDown: "2663", speedUp: "9.61", note: "Pre-game" },
    { time: "7:49 PM", speedDown: "2151", speedUp: "4.04", note: "Pre-game" },
    { time: "7:58 PM", speedDown: "2046", speedUp: "0.093", note: "Pre-game" },
    {
      time: "8:19 PM",
      speedDown: "2082",
      speedUp: "1.04",
      note: "Quarter 1 Break",
    },
    {
      time: "8:37 PM",
      speedDown: "1140",
      speedUp: "1.03",
      note: "Quarter 2 Break",
    },
    {
      time: "8:51 PM",
      speedDown: "2381",
      speedUp: "0.86",
      note: "Quarter 2 Game",
    },
    {
      time: "9:11 PM",
      speedDown: "1064",
      speedUp: "8.86",
      note: "Quarter 3 Break",
    },
    {
      time: "9:57 PM",
      speedDown: "1520",
      speedUp: "380",
      note: "Quarter 4 Game",
    },
  ];

  const wifiData: TableData[] = [
    { time: "7:28 PM", speedDown: "5.91", speedUp: "20.1", note: "Pre-game" },
    { time: "7:51 PM", speedDown: "49.6", speedUp: "27.7", note: "Pre-game" },
    { time: "7:59 PM", speedDown: "5.57", speedUp: "16.7", note: "Pre-game" },
    {
      time: "8:15 PM",
      speedDown: "9.27",
      speedUp: "16.2",
      note: "Quarter 1 Game",
    },
    {
      time: "8:19 PM",
      speedDown: "7.67",
      speedUp: "22.7",
      note: "Quarter 1 Break",
    },
    {
      time: "8:38 PM",
      speedDown: "6.93",
      speedUp: "25.2",
      note: "Quarter 2 Break",
    },
    {
      time: "8:50 PM",
      speedDown: "17.0",
      speedUp: "31.8",
      note: "Quarter 2 Game",
    },
    {
      time: "9:12 PM",
      speedDown: "5.76",
      speedUp: "10.7",
      note: "Quarter 3 Break",
    },
    {
      time: "9:53 PM",
      speedDown: "22.3",
      speedUp: "18.6",
      note: "Quarter 4 Game",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-10 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-5xl font-bold text-white">
          Stadium Networking
        </h1>
        <p className="mt-4 text-center text-gray-400">
          By Breyon Gunn | May 2, 2025
        </p>

        <div className="prose prose-invert mt-10 max-w-none">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p className="mb-6">
            In sports like hockey, football, baseball, and basketball,
            technology is used everywhere. From the time you purchase the
            tickets to the time you are watching the game, you are surrounded
            with a variety of different programs. When you purchase tickets, you
            interact with a program such as TicketMaster or AXS. Each of these
            companies provides an easy way for spectators to purchase tickets
            and for venues to get people into the stadium quickly.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Entry process</h2>
          <p className="mb-6">
            When spectators first enter the stadium, they will typically have
            their tickets scanned. With new technology, this entire process can
            be completed in less than 60 seconds. Approximately five years ago,
            fans had to wait in long lines to enter the stadium, which degraded
            the experience for visitors. Two factors play into the expired
            entry: security screening and mobile entry.
          </p>

          <p className="mb-6">
            One of the factors of expired entry into the stadium is the ticket
            scanning process. There are three challenges that must be addressed
            to create a smooth experience: the spectator must be able to present
            the app with no issues, the network must be stable for both the
            spectator and the person scanning the ticket, and the ticket scanner
            app must be able to quickly validate the ticket to ensure that it is
            not a screenshot and not scanned twice. If any of these aspects of
            the ticket scanning process fail, it will create an unpleasant
            experience for guests and staff.
          </p>

          <p className="mb-6">
            First, the spectator&apos;s phone must be able to accurately display
            the tickets without any issues. Both TicketMaster and AXS use
            methods to prevent the tickets from being cloned and illegally
            resold. TicketMaster uses NFC and a rotating barcode. With NFC
            tickets, the spectator taps their phone on a reader, instantly
            validating the ticket. AXS only uses a rotating barcode. Similar to
            NFC, the rotating barcode can be used offline, which reduces the
            load of the venue&apos;s Wi-Fi network.
          </p>

          <p className="mb-6">
            Second, to validate the ticket, it must quickly look it up in a
            database to find the ticket information and verify that it was not
            scanned twice. Validating the ticket is not as simple as executing
            an SQL statement.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Networking</h2>
          <p className="mb-6">
            To accommodate these advanced features, a fast and highly reliable
            wireless network must be created. In a stadium, two types of
            wireless networks are used: Wi-Fi and cellular. When a user enters
            the stadium, they must decide if they want to connect to Wi-Fi or
            continue to use cellular. If the spectator has an unlimited data
            plan, they will typically will not connect to Wi-Fi. However, due to
            the high costs of unlimited data plans, some individuals may elect
            to use the stadium&apos;s network over cellular.
          </p>

          <p className="mb-6">
            During the Timberwolves game that took place on January 18th, 2025,
            periodic speed tests were conducted throughout the game. A total of
            nineteen data points were gathered throughout the game, which was
            scheduled to start at 8:00 PM. All the information was gathered from
            section 235, row P, and seat nine. The tests analyzed the speed of
            both cellular and Wi-Fi. To analyze the speed of the network, the
            Speedtest app was used on an iPhone 16 Pro.
          </p>

          <h3 className="mt-6 text-xl font-semibold">
            Cellular Speed Measurements
          </h3>
          <div className="mt-4 mb-6 overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-lg bg-gray-800">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Speed Down (Mbps)</th>
                  <th className="px-4 py-2 text-left">Speed Up (Mbps)</th>
                  <th className="px-4 py-2 text-left">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {cellularData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"}
                  >
                    <td className="px-4 py-2">{row.time}</td>
                    <td className="px-4 py-2">{row.speedDown}</td>
                    <td className="px-4 py-2">{row.speedUp}</td>
                    <td className="px-4 py-2">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-6">
            The data gathered from the cellular speed tests is quite
            interesting. Before the game started, the network connection was the
            fastest since there were not many people in the stadium.
            Surprisingly, the upload speed throughout the game was very slow.
            During most of the game, the upload speed was around 1 Mbps.
            Throughout the entire game, the download speed was very fast and
            reliable. During the first speed test, it peaked at 2663 Mbps. This
            is significantly faster than most standard cell towers.
          </p>

          <p className="mb-6">
            During pre-game, the network speed was the fastest. As more people
            entered the stadium, the speed steadily decreased. Whenever there
            was a timeout or commercial break, more people utilized their phone,
            which resulted in a decrease of network speed. As soon as the
            game-play resumed, the number of users on their phones decreased,
            and the network speed increased.
          </p>

          <h3 className="mt-6 text-xl font-semibold">
            Wi-Fi Speed Measurements
          </h3>
          <div className="mt-4 mb-6 overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-lg bg-gray-800">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Speed Down (Mbps)</th>
                  <th className="px-4 py-2 text-left">Speed Up (Mbps)</th>
                  <th className="px-4 py-2 text-left">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {wifiData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"}
                  >
                    <td className="px-4 py-2">{row.time}</td>
                    <td className="px-4 py-2">{row.speedDown}</td>
                    <td className="px-4 py-2">{row.speedUp}</td>
                    <td className="px-4 py-2">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-6">
            Unlike cellular, the Wi-Fi speeds remained fairly consistent
            throughout the entire game. Similar to cellular, as it got closer to
            the start of the game, the speed gradually decreased. The speed
            reduction during commercial breaks was also noticeable but not as
            drastic. However, the upload speed was much faster than cellular
            throughout the entire game, which is great for sharing pictures with
            friends or streaming live video.
          </p>

          <p className="mb-6">
            During pre-game, the Timberwovles utilized software that allows fans
            to stream a live video from the fans&apos; phones to the screen. To
            achieve this, they used software called FanSee!, which was designed
            by CUE Audio. Their software even allow the staff to select videos
            that have the best video feed. For best results at Timberwolves
            games, fans must connect to Wi-Fi since the upload speed is higher
            and more stable than cellular.
          </p>

          <div className="mt-8 text-sm text-gray-400">
            <h3 className="text-lg font-semibold">References</h3>
            <p className="mt-2 mb-4">
              [1] Naraine, M. (2020). If You Build It, Will They Come? An
              Examination of Stadium Options for Sporting Events.
            </p>
            <p className="mt-2 mb-4">
              [2] Schuver, M. (2023). FanSee! Creating Interactive Fan
              Experiences.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/students/breyon-gunn">
            <span className="inline-block cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Back to Profile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
