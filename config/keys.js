dbPassword = 'mongodb+srv://<USER>:'+ encodeURIComponent(<PASSWORD>) + '@<CLUSTER>.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};
