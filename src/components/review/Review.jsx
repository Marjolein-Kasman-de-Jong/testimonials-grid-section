// Styles
import "./review.css";

function Review({ review, index }) {
    const { title, text, authorName, authorStatus, authorAvatar, border, textColor, backgroundColor, colspan, rowspan } = review;

    return (
        <article 
            className={`${textColor} ${backgroundColor} ${colspan ? 'grid-col-span-2' : ''} ${rowspan ? 'grid-row-span-2' : ''}`} 
            style={{ animationDelay: `${index * 0.75}s` }}
        >
            <header>
                <div className="author-container">
                    <img 
                        src={authorAvatar} 
                        alt={authorName} 
                        className={`${border ? 'border' : ''}`}
                    />
                    <hgroup className="author-description">
                        <h3 className="author-name">
                            {authorName}
                        </h3>
                        <p className="author-status">
                            {authorStatus}
                        </p>
                    </hgroup>
                </div>
                <h2 className="title">
                    {title}
                </h2>
            </header>
            <p className="regular-paragraph">
                {text}
            </p>
        </article>
    );
}

export default Review;