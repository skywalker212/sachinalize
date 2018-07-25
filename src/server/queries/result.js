// total runs based on match result

module.exports = {
    "size": 0,
    "aggs": {
        "grounds": {
            "terms": {
                "field": "match_result.keyword",
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