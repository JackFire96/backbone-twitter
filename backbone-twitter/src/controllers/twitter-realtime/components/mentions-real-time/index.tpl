<% for(var i = 0, len = locals.length; i < len; i += 1) { %>

<div id="tweet">
    <div class="img">
        <img id="avatar" src="<%- locals[i].user.avatar %>">
    </div>
    <div class="info">
        <div class="nickname">
            <p><%- locals[i].user.name %></p>
        </div>
        <div class="publishDate">
            <p><%- locals[i].created_at %></p>
        </div>
        <div class="message">
            <p><%- locals[i].text %></p>
        </div>
        <div class="icons">
            <div class="likes">
                <i class="fa fa-heart"><%- locals[i].favorite_count %></i><p></p>
            </div>
            <div class="retweets">
                <i class="fa fa-retweet"></i><p><%- locals[i].retweet_count %></p>
            </div>
            <div class="comments">
                <i class="fa fa-reply"></i><p><%- locals[i].reply_count %></p>
            </div>
        </div>
    </div>
</div>

<% } %>