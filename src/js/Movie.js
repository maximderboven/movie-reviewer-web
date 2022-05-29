export class Movie {
    constructor(
        comingSoon, title, released, runtime, type, plot, poster,id
    ) {
        this.id = id
        this.comingSoon = comingSoon
        this.title = title
        this.released = released;
        this.runtime = runtime;
        this.type = type;
        this.plot = plot;
        this.poster = poster;
    }
}
