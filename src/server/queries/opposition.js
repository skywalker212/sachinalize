// runs scored against a particular opposition

module.exports = {
    "size": 0,
    "aggs": {
        "grounds": {
            "terms": {
                "field": "opposition.keyword",
                "size": 100
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