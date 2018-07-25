// total runs scored bucketed by grounds

module.exports = {
    "size": 0,
    "aggs": {
        "grounds": {
            "terms": {
                "field": "ground.keyword",
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