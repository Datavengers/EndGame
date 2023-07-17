function getTrain()
{
    return {
        cars : [
            {
                "Name" : "Caboose",
                "Description" : "Last car of the train. There are 3 people who have boarded the train in this car since you last checked.",
                "Forward" : "Coach Car 1",
                "Objects" : ["ticket 1", "ticket 2", "ticket 3"]
            },
            {
                "Name" : "Coach Car 1",
                "Description" : "It is a full car with several families.  Look for 2 new passangers and check their tickets.",
                "Forward" : "Coach Car 2",
                "Objects" : ["ticket 4", "ticket 5"]
            },
            {
                "Name" : "Coach Car 2",
                "Description" : "Another full car with several families. Look for 1 new passenger and check their ticket.",
                "Forward" : "Cafe Car",
                "Objects" : ["ticket 6"]
            },
            {
                "Name" : "Cafe Car",
                "Description" : "Several tables and the option for food.  Look for 2 new passengers and check their tickets.",
                "Forward" : "Business Class Car",
                "Objects" : ["ticket 7, ticket 8"]
            },
            {
                "Name" : "Business Class Car",
                "Description" : "A quiet car with several empty seats.  Look for 2 new passengers and check their tickets.",
                "Forward" : "Front of Train",
                "Objects" : ["ticket 9", "ticket 10"]
            }




        ]
    }
};