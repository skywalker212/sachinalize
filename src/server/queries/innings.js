// runs scored by inning

module.exports = {
    "size": 0,
    "aggs": {
        "grounds": {
            "terms": {
                "field": "batting_innings.keyword",
                "size": 10
            },
            "aggs": {
                "runs": {
                    "sum": {
                        "field": "batting_score"
                    }
                }
            }
        }
    }
}