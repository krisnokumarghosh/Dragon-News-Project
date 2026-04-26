import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="w-[95%] lg:container  mx-auto flex items-center  p-4 bg-[#F3F3F3]">
            <button className="btn bg-[#D72050] text-white px-6 py-2.25">Latest</button>
            <Marquee pauseOnHover={true}>
               <p className="text-[#403F3F] font-semibold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae amet commodi repellat corporis eum laborum! Molestias, eligendi ea nisi nobis doloremque impedit dolores similique reprehenderit maxime autem. Cumque dolorum rerum provident, distinctio mollitia est molestiae omnis nam id harum illum repellat soluta aperiam fugit, iure adipisci. Iusto labore, eius hic sed laboriosam magni nesciunt nobis cumque commodi accusamus quia aut enim aliquid adipisci earum. Nesciunt maxime veritatis molestias totam! Odit amet error aspernatur eligendi quidem esse asperiores beatae necessitatibus iure a architecto quibusdam id hic, quas odio ab iusto eius obcaecati, veniam sed dolorem quae nesciunt vel corporis. Deleniti.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;