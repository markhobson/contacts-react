class ContactRepository {
	
	constructor() {
		this.nextId = 1;
		this.contacts = [
			{
				id: this.nextId++,
				name: 'Chip Smith',
				email: 'chip@smith.com',
				avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Chip_Smith_GPG.png'
			},
			{
				id: this.nextId++,
				name: 'Randy Horn',
				email: 'randy@horn.com',
				avatar: 'https://www.sacredheartwdm.org/pictures/2016/1/HORN-RANDY-739.jpg'
			},
			{
				id: this.nextId++,
				name: 'Zane High',
				email: 'zane@high.com',
				avatar: 'https://www.trainmag.com/wp-content/uploads/2017/05/wsi-imageoptim-Frank-Zane.jpg'
			}
		];
		this.callback = () => {};
	}
	
	onChange(callback) {
		this.callback = callback;
		this.handleChange();
	}
	
	handleChange() {
		this.callback(this.contacts);
	}
	
	getAll() {
		return this.contacts;
	}
	
	save(contact) {
		this.contacts = this.contacts
			.map(nextContact => nextContact.id === contact.id ? contact : nextContact);
	
		this.handleChange();
	}
	
	delete(contact) {
		this.contacts = this.contacts
			.filter(nextContact => nextContact.id !== contact.id);
		
		this.handleChange();
	}
	
	add(contact) {
		const newContact = {...contact, id: this.nextId++};
		
		this.contacts = this.contacts
			.concat(newContact);
		
		this.handleChange();
		
		return newContact;
	}
}

export default new ContactRepository();
