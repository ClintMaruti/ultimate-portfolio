import "./members.css";

const Members = () => {
    return (
        <div id="members" className="container members-container">
            <h1 className="member-txt">Experience</h1>
            <div className="member member-1">
                <div className="member-info">
                    <h5 className="date">2021/09 - Present</h5>
                    <h1 className="title">Senior Software Engineer</h1>
                    <h3 className="position">Exqu, Remote, Saudi Arabia</h3>
                    <div className="stack">
                        <div className="member-img"></div>
                        <div className="member-img"></div>
                        <div className="member-img"></div>
                    </div>
                    <h4 className="about">In this role, I worked as a lead backend engineer incharge of developing, scaling and maintaining a chatbot that powered the business.</h4>
                    <ul className="description">
                        <li>Designed the architectural pattern for the chatbot.</li>
                        <li>Worked closely with the stakeholders in determining the flow of the chatbot.</li>
                        <li>Developed chatbot flows using state machines.</li>
                        <li>Adjusted design parameters to boost performance.</li>
                        <li>Onboarded new tools and technologies during development to elevate project quality and shorten timeframes.</li>
                    </ul>
                </div>
            </div>
            <div className="member">
                <div className="member-info">
                    <h5 className="date">2019/04 - 2021/08</h5>
                    <h1 className="title">Software Engineer</h1>
                    <h3 className="position">Turing, Remote, California</h3>
                    <div className="stack">
                        <div className="member-img-2"></div>
                        <div className="member-img-2"></div>
                        <div className="member-img-2"></div>
                    </div>
                    <h4 className="about">I worked on a contractual capacity for various companies Full Stack Engineer. I was involved in:</h4>
                    <ul className="description">
                        <li>Planing, designing, building, and implementing user interface systems of websites, software programs, and web-based applications.</li>
                        <li>Fast tracking development by clearing backlog tickets and fixing bugs</li>
                        <li>Assisted in building beautiful user interfaces for clients without compromising functionality for aesthetics.</li>
                        <li>Writing tests for react components using Jest and in overall implementing TDD to ensure code is tested and 100% bug free</li>
                        <li>Creating story boards for react components</li>
                    </ul>
                </div>
            </div>
            <div className="member">
                <div className="member-info">
                    <h5 className="date">2018/11 - 2019/09</h5>
                    <h1 className="title">Software Engineer</h1>
                    <h3 className="position">Andela, Kenya</h3>
                    <div className="stack">
                        <div className="member-img-3"></div>
                        <div className="member-img-3"></div>
                        <div className="member-img-3"></div>
                    </div>
                    <ul className="description">
                        <li>Worked closely with other business analysts, development teams and infrastructure specialists to deliver high availability solutions for mission-critical applications</li>
                        <li>Responsible for API designs and development of RESTful services for web apps</li>
                        <li>Built extensive test coverage for all new features which reduced the number of customer complaint by 7%</li>
                        <li>Orchestrated efficient large-scale software deployments, including testing features and correcting code.</li>
                    </ul>
                </div>
            </div>
            <div className="member">
                <div className="member-info">
                    <h5 className="date">2017/08 - 2018/10</h5>
                    <h1 className="title">Software Engineer</h1>
                    <h3 className="position">Kreative Renaissance, Kenya</h3>
                    <div className="stack">
                        <div className="member-img-3"></div>
                        <div className="member-img-3"></div>
                        <div className="member-img-3"></div>
                    </div>
                    <ul className="description">
                        <li>Worked on the full software development life cycle from conception to completion of a Job Listing Web</li>
                        <li>Application that had an organic traffic of 200+ users daily at the end</li>
                        <li>Built out the user authentication workflow for a B2B app in the finance industry</li>
                        <li>Orchestrated efficient large-scale software deployments, including testing features and correcting code.</li>
                    </ul>
                </div>
            </div>
            <div className="member">
                <div className="member-info">
                    <h5 className="date">2014/01 - 2016/12</h5>
                    <h1 className="title">Junior Developer</h1>
                    <h3 className="position">Letrads Consultants, Kenya</h3>
                    <div className="stack">
                        <div className="member-img-4"></div>
                        <div className="member-img-4"></div>
                        <div className="member-img-4"></div>
                    </div>
                    <ul className="description">
                        <li>Created the public facing websites to increase visibility for various clients.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Members;
