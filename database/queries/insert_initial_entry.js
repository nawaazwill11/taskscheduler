db.topic.insertMany([
{   
    "books": [
        {
            "name": "Math",
            "units": [
                {
                    "name": "Differentiation",
                    "topics": [
                        {
                            "name": "Overview",
                            "subtopics": [
                                {
                                    "name": "Definition",
                                    "complete": "true"
                                }
                            ]
                        },
                        {
                            "name": "Getting Started",
                            "subtopics": [
                                {
                                    "name": "Basic Derivative Rules 1",
                                    "complete": "false"
                                },
                                {
                                    "name": "Basic Derivative Rules 2",
                                    "complete": "false"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Limits",
                    "topics": [
                        {
                            "name": "Limits  Basics",
                            "subtopics": [
                                {
                                    "name": "Limits Introduction",
                                    "complete": "true"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Python Programming",
            "units": [
                {
                    "name": "Python Basics",
                    "topics": [
                        {
                            "name": "Data Types",
                            "subtopics": [
                                {
                                    "name": "Primitive Types",
                                    "complete": "false"
                                },
                                {
                                    "name": "Collections",
                                    "complete": "false"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        
    ]
}
])