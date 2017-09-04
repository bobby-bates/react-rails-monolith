class Api::V1::CerealsController < ApiController

  def index

    respond_to do |format|
      format.json do
        render json: { cereals: cereals }
        # binding.pry
      end
    end
  end

  def show

  end

  private

  def cereals
    [
      'Kix'
    ]
  end
end
