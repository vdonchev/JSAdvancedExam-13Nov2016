class MailBox {
    constructor() {
        this._mailbox = [];
    }

    get messageCount() {
        return this._mailbox.length;
    }

    addMessage(subject, text) {
        this._mailbox.push({subject, text});

        return this;
    }

    deleteAllMessages() {
        this._mailbox = [];
    }

    findBySubject(substr) {
        if (this._mailbox.length == 0) {
            return [];
        }

        return this._mailbox.filter(m => m.subject.indexOf(substr) >= 0);
    }

    toString() {
        if (this._mailbox.length == 0) {
            return ` * (empty mailbox)`;
        }

        let res = '';
        for (let mail of this._mailbox) {
            res += ' * [' + mail.subject + '] ' + mail.text + '\n';
        }

        return res;
    }
}