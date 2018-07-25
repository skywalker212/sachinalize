// runs scored in particular year

module.exports = {
    "size": 0,
    "aggs": {
        "runs_in_years": {
            "date_histogram": {
                "field": "date",
                "interval": "year"
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