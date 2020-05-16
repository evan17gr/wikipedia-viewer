import React from "react";

const RandomArticleGenerator = () => {
    return (
        <div>
            <form action="https://en.wikipedia.org/wiki/Special:Random" className="form-center">
                <button className="ui button">Generate Random Article</button>
            </form>
        </div>
    );
}

export default RandomArticleGenerator;