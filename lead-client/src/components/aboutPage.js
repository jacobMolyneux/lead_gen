const AboutPage = () => {
    return (
        <div className = 'm-5'>
        <div>
            <h1>How it Works</h1>
            <p>Gathering Leads is a pain. </p>
            <p>I made this site to make getting leads much faster. Last time that I checked, this program can gather 150 leads in 1 minute.</p>
        </div>
        <h1 className = 'border-bottom text-'>How to Use It</h1>
        <h3>Step 1</h3>
        <p>Create a lead list on LinkedIn</p>
        <h3>Step 2</h3>
        <p>Enter your linkedin login information into the username and and password field. Dont worry none if this information is saved and we can nver see it.</p>
        <h3>Step 3</h3>
        <p>Copy and paste the lead list information into the field titled lead list. Make sure that you are on the first page of your lead list when you copy the lead least url otherwise the scrape will not get all of the leads in your list.</p>
        <h3>Step 4</h3>
        <p>Once the leads are scraped click the download button to download the leads as a csv file.</p>
        
        </div>
    )
}
export {AboutPage}