package com.ztraining.reviews.service;

import com.ztraining.reviews.dao.ReviewDao;
import com.ztraining.reviews.model.Comment;
import com.ztraining.reviews.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.util.List;
import java.util.UUID;

@Service
public class ReviewService {
    private final ReviewDao reviewDao;

    @Autowired
    public ReviewService(@Qualifier("dummyDB") ReviewDao reviewDao) {
        this.reviewDao = reviewDao;
    }

    public int addReview(Review review) {
        return reviewDao.addReview(review);
    }

    public List<Review> getAllReviews() {
        return reviewDao.getAllReviews();
    }

    public List<Review> getAllSortedReviews(String option) {
        return reviewDao.getAllSortedReviews(option);
    }

    public List<Review> getAllSortedPageReviews(String option, int pageNum) {
        return reviewDao.getAllSortedPageReviews(option, pageNum);
    }

    public int addComment(UUID id, Comment comment) throws MalformedURLException {
        return reviewDao.addComment(id, comment);
    }

    public List<Comment> getComments(UUID id) {
        return reviewDao.getComments(id);
    }

    public int addLike(UUID id) {
        return reviewDao.addLike(id);
    }
}
