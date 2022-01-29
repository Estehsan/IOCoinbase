/* This example requires Tailwind CSS v2.0+ */
import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";
import Header from "./Header";

export default function Home() {
  const { address, connectWallet, disconnectWallet } = useWeb3();

  return (
    <div className="bg-black h-screen w-full">
      {address ? (
        // <Dashboard address={address} />
        <Header />
      ) : (
        <div className="grid place-items-center h-screen">
          <button
            type="button"
            onClick={() => connectWallet("injected")}
            className="py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
            Login with Metamask
          </button>
        </div>
      )}
    </div>
  );
}
