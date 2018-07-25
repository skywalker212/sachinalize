// show buckets of runs scored till 300

module.exports = {
    "size": 0,
    "aggs": {
        "grounds": {
            "terms": {
                "field": "batting_score",
                "size": 300
            }
        }
    }
}