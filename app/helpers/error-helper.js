export default class ErrorHelper {
    eraseStart = (start, string) => {
        let str = new String(string);
        let first = new String(start);
        return str.substring(first.length);
    }

    changeTerms = (term, original, string) => {
        let str = new String(string);
        let word = new String(term);
        let og = new String(original);
        return str.replace(og, word);
    }
}