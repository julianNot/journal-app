
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text : 'Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
            picture : null,
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text : 'Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
            picture : null,
        },
        {
            id: new Date().getTime() + 200,
            date: new Date().toDateString(),
            text : 'The printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
            picture : null,
        },
        {
            id: new Date().getTime() + 300,
            date: new Date().toDateString(),
            text : 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
            picture : null,
        },
    ]
})