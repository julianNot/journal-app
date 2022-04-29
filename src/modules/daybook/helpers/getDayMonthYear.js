const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

const getDayMonthYear = ( dateString ) => {
    const date = new Date( dateString )

    return {
        day : date.getDate(),
        months : months[ date.getMonth() ],
        year : `${ date.getFullYear() }, ${ days[ date.getDay() ] }`
    }
}

export default getDayMonthYear