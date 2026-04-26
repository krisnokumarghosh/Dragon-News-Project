import Link from "next/link";

const NotFound = () => {
    return (
        <div className="text-center">
            <h2>This page is not found</h2>
            <Link href={'/'}>
             <button className="btn mt-4 ">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;