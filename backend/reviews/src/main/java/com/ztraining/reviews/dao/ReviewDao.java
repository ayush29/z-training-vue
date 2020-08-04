package com.ztraining.reviews.dao;

import com.ztraining.reviews.model.Comment;
import com.ztraining.reviews.model.Review;

import java.net.MalformedURLException;
import java.util.List;
import java.util.UUID;

public interface ReviewDao {
    int addReview(Review review);
    List<Review> getAllReviews();

    Comment addComment(UUID id, Comment text) throws MalformedURLException;

    int addLike(UUID id);

    List<Comment> getComments(UUID id);

    List<Review> getAllSortedReviews(String option);

    int getNumReviews();
}
