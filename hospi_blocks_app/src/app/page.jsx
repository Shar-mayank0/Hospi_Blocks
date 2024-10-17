// components/Navigation.js
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="h-64 mt-72 ml-72 pl-72 justify-center align-items-center">
      <div className="flex flex-col w-48 px-5 ">
        <Button className="mx-2 my-3 p-7 text-lg">
          <Link href="/hospital" className="text-white hover:text-gray-300">
            User Page
          </Link>
        </Button>
        <Button className="mx-2 my-3 p-7 text-lg">
          <Link href="/hospital" className="text-white hover:text-gray-300">
            Hospital Page
          </Link>
        </Button>
        <Button className="mx-2 my-3 p-7 px-8 text-lg">
          <Link href="/admin" className="text-white hover:text-gray-300">
            Admin Page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
