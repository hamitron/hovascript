class EntriesController < ApplicationController

def index

	@entries = Entry.all

end

def new

	@entry = Entry.new

end


def create

	@entry = Entry.new(entry_params)

	if @entry.save
		redirect_to entries_path
	else
		render 'new'
	end
	
end

def edit
end

def update
end





def destroy
   m = Entry.find(params[:id])
		m.destroy
	redirect_to entries_path
		
end




private
  def entry_params
    params.require(:entry).permit(:name, :body, :id)
 end


end
